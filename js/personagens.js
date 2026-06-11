function abrirLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox-nome').textContent = img.alt;

    lightbox.classList.add('ativo');
    document.body.style.overflow = 'hidden';
}

function fecharLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('ativo');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharLightbox();
});