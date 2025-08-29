document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.modalmask');

    modals.forEach(modal => {
        const modalBox = modal.querySelector('.modalbox');
        const closeBtn = modal.querySelector('.close');

        // Clic en cualquier parte del modal (incluye imágenes o texto)
        modalBox.addEventListener('click', function (e) {
            e.stopPropagation();

            // Calcular posición clic dentro del modal
            const rect = modalBox.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            // Cambiar el punto de origen del zoom
            modalBox.style.transformOrigin = `${x}% ${y}%`;

            // Alternar clase de zoom
            modalBox.classList.toggle('zoomed');
        });

        // Clic en el fondo oscuro
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modalBox.classList.remove('zoomed');
            }
        });

        // Botón cerrar
        closeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            modalBox.classList.remove('zoomed');
        });
    });
});