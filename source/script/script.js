
    // Countdown Timer
    const weddingDate = new Date('2026-06-26T14:00:00+09:00');

    function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
    document.getElementById('cd-days').textContent = '0';
    document.getElementById('cd-hours').textContent = '0';
    document.getElementById('cd-minutes').textContent = '0';
    document.getElementById('cd-seconds').textContent = '0';
    document.getElementById('cd2-days').textContent = '0';
    document.getElementById('cd2-hours').textContent = '0';
    document.getElementById('cd2-minutes').textContent = '0';
    document.getElementById('cd2-seconds').textContent = '0';
    return;
}

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cd-days').textContent = days;
    document.getElementById('cd-hours').textContent = hours;
    document.getElementById('cd-minutes').textContent = minutes;
    document.getElementById('cd-seconds').textContent = seconds;
    document.getElementById('cd2-days').textContent = days;
    document.getElementById('cd2-hours').textContent = hours;
    document.getElementById('cd2-minutes').textContent = minutes;
    document.getElementById('cd2-seconds').textContent = seconds;
}

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Lightbox
    document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

    function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => { lightboxImg.src = ''; }, 300);
}

    document.querySelectorAll('.dresscode-photo img, .mens-photo img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
});

    if (lightboxClose) {
    lightboxClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeLightbox();
});
}

    lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
}
});

    const video = document.getElementById('wedding-video');
    const playBtn = document.querySelector('.video-play-btn');
    const playIcon = playBtn.querySelector('.play-icon');
    const pauseIcon = playBtn.querySelector('.pause-icon');

    if (!video || !playBtn) return;

    // Обновление иконки при изменении состояния
    function updateButton() {
    if (video.paused) {
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
} else {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
}
}

    // Обработчик клика по кнопке
    playBtn.addEventListener('click', () => {
    if (video.paused) {
    video.play();
} else {
    video.pause();
}
    updateButton();
});

    // Синхронизация кнопки с внешними событиями (например, если пользователь нажал пробел)
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);

    // Инициализация: убедимся, что видео запущено (на случай, если autoplay не сработал)
    video.play().catch(() => {
    console.log('Autoplay prevented. User interaction needed.');
    updateButton();
});
});


    // FAQ Toggle
    function toggleFaq(item) {
    item.classList.toggle('active');
}

    // Scroll Animations
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

    fadeEls.forEach(el => observer.observe(el));

