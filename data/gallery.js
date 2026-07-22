/* category はフィルター用。必要に応じて tags: [] を追加できます。 */
window.galleryData = [
  { title: '緋鶴', date: '2026-07-01', category: 'original', thumbnail: 'images/gallery/oc緋鶴.webp', full: 'images/gallery/oc緋鶴.webp', alt: '', description: 'oc 朱雀のoc' },
  { title: 'ミニキャラFA', date: '2026-06-18', category: 'fanart', thumbnail: 'images/gallery/ミニキャラFA.webp', full: 'images/gallery/ミニキャラFA.webp', alt: '', description: 'ミニキャラFA Vtuber　花狩くれは様' },
  { title: '無償企画', date: '2026-06-03', category: 'commission', thumbnail: 'images/gallery/無償企画.webp', full: 'images/gallery/無償企画.webp', alt: '', description: 'Xにて募集した無償企画イラスト IRIAMライバーの枝葉ルクリア様' },
  { title: '無償企画02', date: '2026-05-20', category: 'commission', thumbnail: 'images/gallery/無償企画02.webp', full: 'images/gallery/無償企画02.webp', alt: '', description: 'Xにて募集した無償企画イラスト IRIAMライバーの白骨紅様' },
  { title: 'ミニキャラFA02', date: '2026-05-04', category: 'fanart', thumbnail: 'images/gallery/ミニキャラFA02.webp', full: 'images/gallery/ミニキャラFA02.webp', alt: '', description: 'ミニキャラFA' },
  { title: '翠の森', date: '2026-04-12', category: 'fanart', thumbnail: 'images/gallery/翠の森.webp', full: 'images/gallery/翠の森.webp', alt: '', description: 'ローゼンメイデンFA 翠星石' },
  { title: 'ポコポケFA', date: '2026-04-12', category: 'fanart', thumbnail: 'images/gallery/ポコポケFA.webp', full: 'images/gallery/ポコポケFA.webp', alt: '', description: 'ポコポケ、Vtuber FA 花狩くれは様' },
  { title: '花嫁', date: '2026-04-12', category: 'fanart', thumbnail: 'images/gallery/花嫁.webp', full: 'images/gallery/花嫁.webp', alt: '', description: '蟲の国の婚礼 Vtuber FA 花狩くれは様' },

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
