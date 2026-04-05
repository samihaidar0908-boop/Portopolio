const openBtn = document.getElementById('menu-open-button');
const closeBtn = document.getElementById('menu-close-button');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('nav-overlay');

openBtn.addEventListener('click', () => {
    navbar.classList.add('open');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('open');
    overlay.classList.remove('active');
});

// Klik overlay juga close (opsional, hapus kalau tidak mau)
overlay.addEventListener('click', () => {
    navbar.classList.remove('open');
    overlay.classList.remove('active');
});