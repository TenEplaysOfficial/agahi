import './styles/image-zoom.css';

document.addEventListener('agahi:ready', () => {
  const article = document.getElementById('md');

  if (!article) return;

  if (!document.getElementById('img-preview-overlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'img-preview-overlay';
    overlay.innerHTML = `<img id="preview-img" src="" alt="Preview" />`;
    document.body.appendChild(overlay);
  }

  const overlay = document.getElementById('img-preview-overlay');
  const previewImg = document.getElementById('preview-img');
  let zoomed = false;

  const bindZoom = () => {
    article.querySelectorAll('img:not([data-zoom-bound])').forEach((img) => {
      img.dataset.zoomBound = true;
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        previewImg.src = img.src;
        overlay.style.display = 'flex';
        zoomed = false;
        previewImg.style.transform = 'scale(1)';
        overlay.style.cursor = 'zoom-in';
      });
    });
  };

  new MutationObserver(bindZoom).observe(article, {
    childList: true,
    subtree: true,
  });

  // Click to zoom toggle
  previewImg.addEventListener('click', (e) => {
    e.stopPropagation();
    zoomed = !zoomed;
    previewImg.style.transform = `scale(${zoomed ? 2 : 1})`;
    overlay.classList.toggle('zoomed', zoomed);
  });

  // Close on outside click or ESC
  overlay.addEventListener('click', () => (overlay.style.display = 'none'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay.style.display = 'none';
  });
});
