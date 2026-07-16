/* category はフィルター用。必要に応じて tags: [] を追加できます。 */
window.galleryData = [
  { title: '白い灯', date: '2026-07-01', category: 'original', thumbnail: 'images/gallery/white-lamp.svg', full: 'images/gallery/white-lamp.svg', alt: '白い灯りと花', description: '夜更けの小さな明かり。' },
  { title: '月の庭', date: '2026-06-18', category: 'original', thumbnail: 'images/gallery/moon-garden.svg', full: 'images/gallery/moon-garden.svg', alt: '月の庭園', description: '眠りにつく前の庭。' },
  { title: '古書店', date: '2026-06-03', category: 'fanart', thumbnail: 'images/gallery/bookshop.svg', full: 'images/gallery/bookshop.svg', alt: '古書店の室内', description: '好きな作品へのファンアート。' },
  { title: '窓辺の花', date: '2026-05-20', category: 'commission', thumbnail: 'images/gallery/window-flower.svg', full: 'images/gallery/window-flower.svg', alt: '窓辺の花', description: 'ご依頼で制作した一枚。' },
  { title: '薄明', date: '2026-05-04', category: 'original', thumbnail: 'images/gallery/dawn.svg', full: 'images/gallery/dawn.svg', alt: '淡い夜明け', description: '' },
  { title: '星を運ぶ', date: '2026-04-12', category: 'fanart', thumbnail: 'images/gallery/stars.svg', full: 'images/gallery/stars.svg', alt: '星を運ぶ人物', description: '' }
];

/*
更新手順
1. images/gallery/ に画像を入れる
2. 以下のテンプレートをコピーする
3. タイトル、日付、カテゴリ、画像パスなどを書き換える
4. 新着として表示したい場合は配列の先頭へ追加する

thumbnail と full には同じ画像を指定してもよい。
category は既存の original、fanart、commission を使用する。

{
  title: '作品タイトル',
  date: '2026-01-01',
  category: 'original',
  thumbnail: 'images/gallery/new-work.svg',
  full: 'images/gallery/new-work.svg',
  alt: '画像の説明',
  description: '作品の補足説明'
}
*/
