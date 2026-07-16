/* slug と同名の HTML ページを games/ に用意すると作品を追加できます。 */
window.gamesData = [
  {
    slug: 'euphoria',
    title: 'Euphoria',
    catchcopy: '眠れない街で、あなたは月を探す。',
    keyVisual: 'images/games/euphoria-keyvisual.svg',
    story: '永遠に夜が明けない街、リュネ。月の声を聞く少女と、名をなくした旅人は、薄明の在りかを探して歩き出す。静かな選択の先に残るのは、誰かを救うための小さな光。',
    genre: '探索型アドベンチャー',
    releaseDate: '2026年 夏予定',
    platform: 'Windows / macOS',
    price: '無料',
    characters: [
      { name: 'フィア', description: '月の声を聞く、街の案内人。' },
      { name: 'ノア', description: '記憶を失った旅人。' }
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
