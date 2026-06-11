function abrirLightbox(img) {
    const lightbox = document.getElementById('lightbox-galeria');
    document.getElementById('lightbox-img-galeria').src = img.src;
    document.getElementById('lightbox-nome-galeria').textContent = img.alt;

    lightbox.classList.add('ativo');
    document.body.style.overflow = 'hidden';
}

function fecharLightbox() {
    const lightbox = document.getElementById('lightbox-galeria');
    lightbox.classList.remove('ativo');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharLightbox();
});