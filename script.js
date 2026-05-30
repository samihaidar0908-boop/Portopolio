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

// Buat pengamat — pantau elemen yang masuk viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Elemen masuk layar → tambah class reveal
            entry.target.classList.add('reveal-section');
        }
    });
}, {
    threshold: 0.1 // trigger saat 10% elemen kelihatan
});

// Daftarkan semua elemen yang punya class hidden-section
document.querySelectorAll('.hidden-section').forEach(el => {
    observer.observe(el);
});