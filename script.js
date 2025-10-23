// Placeholder untuk interaktivitas tambahan, misal alert saat klik link (bisa dihapus jika tidak perlu)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Navigating to: ' + this.href);
    });
});