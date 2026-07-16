/* slug と同名の HTML ページを games/ に用意すると作品を追加できます。 */
window.gamesData = [
  {
    slug: 'euphoria',
    title: '鏡の中のEuphoria',
    catchcopy: '鏡の向こうで、失くした記憶を探す。',
    keyVisual: 'images/games/euphoria-keyvisual.svg',
    story: 'その手鏡には不思議な力があった。記憶を失い、鏡の世界へ迷い込んだ主人公。そこで出会った人物と交流を深めながら、失われた記憶を集め、現実世界への帰還を目指す。',
    genre: '恋愛アドベンチャーゲーム。',
    releaseDate: '2027年 予定',
    platform: 'Windows / macOS',
    price: '無料',
    characters: [
      { name: '主人公', description: '記憶を失い、鏡の世界で目覚める。' },
      
    ],
    gallery: [],
    downloadUrl: '',
    extra: []
  }
];

/*
更新方法

Gallery
① images/games に画像を追加
② gallery テンプレートをコピーして追加

Download
配布開始後に downloadUrl にURLを入力

Extra
後日談・設定資料・R18作品などを追加する場合は
extra テンプレートをコピーして追加

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
  gallery: [],
  downloadUrl: 'https://example.com/',
  extra: []
}

Gallery テンプレート
gallery: [
  {
    title: 'タイトル',
    date: '2026-07-16',
    thumbnail: 'images/games/sample.webp',
    full: 'images/games/sample.webp',
    alt: '画像説明'
  }
]

Download テンプレート
downloadUrl: 'https://example.com/'

Extra テンプレート
extra: [
  {
    label: '後日談',
    url: 'https://example.com/'
  },
  {
    label: '設定資料',
    url: 'https://example.com/'
  },
  {
    label: '18歳以上向け作品はこちら',
    url: 'https://example.com/'
  }
]
*/
