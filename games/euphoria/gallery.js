(() => {
  const items = window.euphoriaGalleryData || [];
  const list = document.querySelector('#euphoria-gallery-list');
  if (!list) return;
  list.innerHTML = items.map((item, index) => `<button class="gallery-button" type="button" data-index="${index}" aria-label="${item.title}を拡大表示"><img src="${item.thumbnail}" alt="${item.alt}" loading="lazy"></button>`).join('');
  document.body.insertAdjacentHTML('beforeend', '<div class="modal" role="dialog" aria-modal="true" aria-label="作品の拡大表示"><div class="modal-dialog"><figure class="modal-figure"><img><figcaption class="modal-caption"><h2></h2><p></p></figcaption></figure><div class="modal-controls"><button type="button" data-action="prev">← 前へ</button><button type="button" data-action="close">閉じる</button><button type="button" data-action="next">次へ →</button></div></div></div>');
  const modal = document.querySelector('.modal');
  let current = 0;
  const show = index => {
    current = (index + items.length) % items.length;
    const item = items[current];
    modal.querySelector('img').src = item.full;
    modal.querySelector('img').alt = item.alt;
    modal.querySelector('h2').textContent = item.title;
    modal.querySelector('p').textContent = `${item.date}　${item.description || ''}`;
    modal.classList.add('open');
  };
  list.querySelectorAll('[data-index]').forEach(button => button.addEventListener('click', () => show(Number(button.dataset.index))));
  modal.addEventListener('click', event => {
    if (event.target === modal || event.target.dataset.action === 'close') modal.classList.remove('open');
    if (event.target.dataset.action === 'prev') show(current - 1);
    if (event.target.dataset.action === 'next') show(current + 1);
  });
  document.addEventListener('keydown', event => {
    if (!modal.classList.contains('open')) return;
    if (event.key === 'Escape') modal.classList.remove('open');
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
})();
