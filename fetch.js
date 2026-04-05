document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault(); // stop reload halaman

    const notif = document.getElementById('notif');

    const data = {
        nama    : document.getElementById('nama').value,
        email   : document.getElementById('email').value,
        telepon : document.getElementById('telepon').value,
        subjek  : document.getElementById('subjek').value,
        pesan   : document.getElementById('pesan').value
    };

    try {
        const response = await fetch('http://localhost:8000/api/pesan', {
            method  : 'POST',
            headers : { 'Content-Type': 'application/json' },
            body    : JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            notif.style.color   = '#b74b4b';
            notif.style.display = 'block';
            notif.textContent   = '✅ Pesan berhasil dikirim!';
            this.reset(); // kosongkan form
        }

    } catch (err) {
        notif.style.color   = 'red';
        notif.style.display = 'block';
        notif.textContent   = '❌ Gagal mengirim pesan, coba lagi.';
    }
});