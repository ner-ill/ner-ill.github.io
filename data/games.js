/* slug と同名の HTML ページを games/ に用意すると作品を追加できます。 */
window.gamesData = [
  {
    slug: 'euphoria',
    title: '鏡の中のEuphoria',
    catchcopy: '鏡の向こうで、失くした記憶を探す。',
    keyVisual: 'images/games/euphoria-keyvisual.svg',
    story: 'その手鏡には不思議な力があった。記憶を失い、鏡の世界へ迷い込んだ主人公。そこで出会った人物と交流を深めながら、失われた記憶を集め、現実世界への帰還を目指す。',
    genre: '恋愛アドベンチャーゲーム',
    releaseDate: '2027年 予定',
    platform: 'Windows / macOS',
    price: '無料',
    characters: [
      { name: '主人公', description: '記憶を失い、鏡の世界で目覚める。' },
      
    ],
    gallery: [
      { title: '月を待つ庭', date: '2026-06-01', thumbnail: 'images/games/euphoria-01.svg', full: 'images/games/euphoria-01.svg', alt: '月明かりの庭' },
      { title: '夜の駅', date: '2026-06-02', thumbnail: 'images/games/euphoria-02.svg', full: 'images/games/euphoria-02.svg', alt: '夜の駅舎' }
    ],
    downloadUrl: 'https://example.com/',
    extra: [
      { label: '後日談を読む（note）', url: 'https://note.com/' },
      { label: '設定資料を見る（BOOTH）', url: 'https://booth.pm/' },
      { label: '18歳以上向け作品はこちら', url: 'https://example.com/' }
    ]
  }
];

/*
新しいゲームを追加するときは、このブロックをコピーして
window.gamesData 配列の末尾へ追加する。
既存の最後のゲームデータの閉じ括弧の後ろにカンマを付けてから追加する。

{
  slug: 'new-game',
  title: 'ゲームタイトル',
  catchcopy: 'キャッチコピー',
  keyVisual: 'images/games/new-game-keyvisual.svg',
  story: 'あらすじ',
  genre: 'ジャンル',
  releaseDate: '公開日',
  platform: '対応OS',
  price: '価格',
  characters: [
    { name: 'キャラクター名', description: '紹介文' }
  ],
  gallery: [
    { title: '画像タイトル', date: '2026-01-01', thumbnail: 'images/games/new-game-01.svg', full: 'images/games/new-game-01.svg', alt: '画像の説明' }
  ],
  downloadUrl: 'https://example.com/',
  extra: [
    { label: '追加コンテンツ', url: 'https://example.com/' }
  ]
}
*/
