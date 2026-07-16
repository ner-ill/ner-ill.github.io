(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = value => String(value == null ? '' : value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const dateText = date => new Intl.DateTimeFormat('ja-JP', {year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(`${date}T00:00:00`));
  const path = location.pathname.includes('/games/') ? '../' : location.pathname.includes('/gallery/') || location.pathname.includes('/news/') ? '../' : '';
  const image = src => `${path}${src}`;
  const renderNews = (target, items, limit) => { if (!target) return;
  target.innerHTML = items.slice(0,limit).map(n => `<a class="news-item" href="${n.url || '#'}"><time datetime="${esc(n.date)}">${dateText(n.date)}</time><span>${esc(n.title)}</span><span class="tag">${esc(n.category)}</span></a>`).join('');
  };
  const gameCard = game => `<a class="game-card" href="${path}games/${esc(game.slug)}.html"><div class="game-image"><img src="${image(game.keyVisual)}" alt="${esc(game.title)}のキービジュアル"></div><div class="details"><div><h3>${esc(game.title)}</h3><p>${esc(game.catchcopy)}</p></div></div></a>`;
  const renderGames = (target, items, limit) => { if (target) target.innerHTML = items.slice(0,limit).map(gameCard).join('');
  };
  const galleryButton = (item, index) => `<button class="gallery-button" type="button" data-gallery-index="${index}" aria-label="${esc(item.title)}を拡大表示"><img src="${image(item.thumbnail)}" alt="${esc(item.alt || item.title)}" loading="lazy"></button>`;
  const attachModal = (items, root = document) => { let modal = $('.modal');
  if (!modal) { document.body.insertAdjacentHTML('beforeend', `<div class="modal" role="dialog" aria-modal="true" aria-label="作品の拡大表示"><div class="modal-dialog"><figure class="modal-figure"><img><figcaption class="modal-caption"><h2></h2><p></p></figcaption></figure><div class="modal-controls"><button type="button" data-modal="prev">← 前へ</button><button type="button" data-modal="close">閉じる</button><button type="button" data-modal="next">次へ →</button></div></div></div>`);
  modal = $('.modal');
  } let current = 0;
  const show = i => { current=(i+items.length)%items.length;
  const item=items[current];
  $('img',modal).src=image(item.full || item.thumbnail);
  $('img',modal).alt=item.alt||item.title;
  $('h2',modal).textContent=item.title;
  $('p',modal).textContent=`${dateText(item.date)}${item.description ? `　${item.description}` : ''}`;
  modal.classList.add('open');
  $('button[data-modal="close"]',modal).focus();
  };
  $$('[data-gallery-index]',root).forEach(button => button.addEventListener('click', () => show(Number(button.dataset.galleryIndex))));
  modal.addEventListener('click', e => { if(e.target === modal || e.target.dataset.modal === 'close') modal.classList.remove('open');
  if(e.target.dataset.modal === 'prev') show(current-1);
  if(e.target.dataset.modal === 'next') show(current+1);
  });
  document.addEventListener('keydown', e => { if(!modal.classList.contains('open')) return;
  if(e.key==='Escape') modal.classList.remove('open');
  if(e.key==='ArrowLeft') show(current-1);
  if(e.key==='ArrowRight') show(current+1);
  });
  };
  $('#year') && ($('#year').textContent = new Date().getFullYear());
  if (window.newsData) { renderNews($('#home-news'), newsData, 3);
  renderNews($('#news-list'), newsData, newsData.length);
  }
  if (window.gamesData) { renderGames($('#home-games'), gamesData, 3);
  renderGames($('#game-list'), gamesData, gamesData.length);
  }
  if (window.galleryData) { const home=$('#home-gallery');
  if(home){ home.innerHTML=galleryData.slice(0,3).map(galleryButton).join('');
  attachModal(galleryData.slice(0,3),home);
  } const full=$('#gallery-list');
  if(full){ let filtered=galleryData;
  const draw=()=>{full.innerHTML=filtered.map(galleryButton).join('');attachModal(filtered,full);};
  draw();
  $$('.filter').forEach(button=>button.addEventListener('click',()=>{ $$('.filter').forEach(b=>b.classList.toggle('active',b===button));
  filtered=button.dataset.category==='all'?galleryData:galleryData.filter(item=>item.category===button.dataset.category);
  draw();
  }));
  } }
  const page = $('[data-game-slug]');
  if(page && window.gamesData){ const game=gamesData.find(g=>g.slug===page.dataset.gameSlug);
  if(game){ document.title=`${game.title} | 兎屋`;
  page.innerHTML=`<div class="game-hero"><img src="${image(game.keyVisual)}" alt="${esc(game.title)}のキービジュアル"></div><article class="game-content"><p class="eyebrow">GAME</p><h1>${esc(game.title)}</h1><p class="catch">${esc(game.catchcopy)}</p><section><h2>Story</h2><p>${esc(game.story)}</p></section><section><h2>Information</h2><dl class="info"><dt>ジャンル</dt><dd>${esc(game.genre)}</dd><dt>公開日</dt><dd>${esc(game.releaseDate)}</dd><dt>対応OS</dt><dd>${esc(game.platform)}</dd><dt>価格</dt><dd>${esc(game.price)}</dd></dl></section><section><h2>Character</h2><ul class="character-list">${game.characters.map(c=>`<li><strong>${esc(c.name)}</strong>　${esc(c.description)}</li>`).join('')}</ul></section><section><h2>Gallery</h2><div class="gallery-grid">${game.gallery.map((g,i)=>galleryButton(g,i)).join('')}</div></section><section><h2>Download</h2><a class="button" href="${esc(game.downloadUrl)}" target="_blank" rel="noopener">ダウンロードページへ ↗</a></section><section><h2>Extra</h2><div class="extra-links">${game.extra.map(x=>`<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.label)} ↗</a>`).join('')}</div></section><a class="back" href="index.html">← Game一覧へ戻る</a></article>`;
  attachModal(game.gallery,page);
  if (game.slug === 'euphoria') {
    const euphoriaLinks = {
      Story: 'euphoria/story.html',
      Character: 'euphoria/characters.html',
      Gallery: 'euphoria/gallery.html',
      Extra: 'euphoria/extra.html'
    };
    $$('section', page).forEach(section => {
      const heading = $('h2', section);
      if (heading && euphoriaLinks[heading.textContent]) {
        heading.innerHTML = `<a href="${euphoriaLinks[heading.textContent]}">${heading.textContent}</a>`;
      }
    });
  }
  } }
})();
