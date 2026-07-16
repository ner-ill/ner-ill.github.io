/* slug と同名の HTML ページを games/ に用意すると作品を追加できます。 */
window.gamesData = [
  {
    slug: 'euphoria',
    title: '鏡の中のEuphoria',
    catchcopy: '鏡の向こうで、失くした記憶を探す。',
    keyVisual: 'images/games/euphoria-keyvisual.svg',
    story: 'その手鏡には不思議な力があった。記憶を失い、鏡の世界へ迷い込んだ主人公。そこで出会った人物と交流を深めながら、失われた記憶を集め、現実世界への帰還を目指す。\n\n永遠に夜が明けない街、リュネ。月の声を聞く少女フィアと、名をなくした旅人は、薄明の在りかを探して歩き出します。\n\n静かな選択の先に残るのは、誰かを救うための小さな光。鏡の向こう側にあるもうひとつの夜をめぐる物語です。\n\nこの場所には、月の光を集める人々と、夜に忘れられたものたちが暮らしています。',
    genre: '恋愛アドベンチャーゲーム',
    releaseDate: '2027年 予定',
    platform: 'Windows / macOS',
    price: '無料',
    characters: [
      { name: '主人公', description: '記憶を失い、鏡の世界で目覚める。' },
      
    ],
    gallery: [],
    downloadUrl: '',
    extra: [],
    characterUrl: 'euphoria/characters.html',
    galleryUrl: 'euphoria/gallery.html',
    novelUrl: 'https://note.com/',
    materialsUrl: '',
    adultUrl: ''
  }
];

/*
更新方法

Gallery
① images/games に画像を追加
② gallery テンプレートをコピーして追加

Download
配布開始後に downloadUrl にURLを入力

Character / Gallery
個別ページを作成した場合は characterUrl / galleryUrl にURLを入力

Novel / Materials / 18+
作品別マガジン・設定資料・成人向け作品のURLを入力

新しいゲームを追加するときは、このブロックをコピーして
window.gamesData 配列の末尾へ追加する。
既存の最後のゲームデータの閉じ括弧の後ろにカンマを付けてから追加する。

{
  slug: 'new-game',
  title: 'ゲームタイトル',
  catchcopy: 'キャッチコピー',
  keyVisual: 'images/games/new-game-keyvisual.svg',
  story: 'あらすじ。段落を分ける場合は、空行を1行入れる。',
  genre: 'ジャンル',
  releaseDate: '公開日',
  platform: '対応OS',
  price: '価格',
  characters: [
    { name: 'キャラクター名', description: '紹介文' }
  ],
  gallery: [],
  downloadUrl: 'https://example.com/',
  extra: [],
  characterUrl: 'new-game/characters.html',
  galleryUrl: 'new-game/gallery.html',
  novelUrl: 'https://note.com/your-magazine',
  materialsUrl: '',
  adultUrl: ''
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

Character / Gallery テンプレート
characterUrl: 'new-game/characters.html'
galleryUrl: 'new-game/gallery.html'

Novel / Materials / 18+ テンプレート
novelUrl: 'https://note.com/your-magazine'
materialsUrl: 'https://example.com/'
adultUrl: 'https://example.com/'
*/
