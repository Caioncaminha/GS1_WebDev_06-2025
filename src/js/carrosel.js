document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carrosel-img');
    const prevBtn = document.querySelector('.carrosel-btn.prev');
    const nextBtn = document.querySelector('.carrosel-btn.next');
    let current = 0;
    const total = images.length;
    let intervalId;

    function showImage(idx) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === idx);
        });
    }

    function nextImage() {
        current = (current + 1) % total;
        showImage(current);
    }

    function prevImage() {
        current = (current - 1 + total) % total;
        showImage(current);
    }

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(nextImage, 6000);
    }

    nextBtn.addEventListener('click', () => {
        nextImage();
        resetInterval();
    });
    prevBtn.addEventListener('click', () => {
        prevImage();
        resetInterval();
    });

    // Troca automática a cada 6 segundos
    intervalId = setInterval(nextImage, 6000);

    // Inicializa a primeira imagem
    showImage(current);
});