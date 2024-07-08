document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('dark-theme-variables');

    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-theme-variables');
    });

    const images = document.querySelectorAll('.clickable-image');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const closeBtn = document.getElementById('close-btn');

    images.forEach(image => {
        image.addEventListener('click', () => {
            overlay.style.display = 'flex';
            overlayImage.src = image.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlayImage.src = '';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
            overlayImage.src = '';
        }
    });
});