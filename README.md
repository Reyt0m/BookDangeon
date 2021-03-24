本の難易度を設定し、経験値を振る拡張機能
#　目標
拡張機能からwebアプリに転換し、難易度推定のレベルを上げる
pythonの自然言語処理により、レビューの文章から難易度を推定するプログラムを作り、それをアプリ化する
読書レベルとは言っているが、実際のところ文章慣れレベルでもある。
# 基本的な仕様書
https://hackmd.io/g84EhK-jSl2ZxYBEyVO8Ig?view
#　使用言語
html, css, Javascript(node.js), json


## 起きたエラー一覧

### デバック段階

- Default locale was specified, but \_locales subtree is missing.
  インストール時の問題。
  翻訳すると『デフォルトのロケールが指定されましたが、\_locales サブツリーがありません。』
- 参考
  https://mizominton.hatenablog.jp/entry/chrome-extension#Default-locale-was-specified-but-_locales-subtree-is-missing

- Could not load icon 'knowledge.svg' specified in 'browser_action'.

## 基本事項

icons
Chrome Web Store や chrome://extensions で使われるアプリ（拡張機能）のアイコンです。

background
バックグラウンドで使う JS（後述）です。

browser_action
extension_page
今回 browser_action タイプの拡張機能を作るので、関連設定はここで記述します。

default_icon : ツールバーのアイコン、Retina 対応に、38 ピクセルのアイコンも用意しておきましょう。

default_title : ツールバーのアイコンにカーソルをかざしてるときのツールチップ。

default_popup : ツールバーのアイコンをクリックしたときに出てくるポップアップ、HTML ファイルです。

- Content Scripts
  Web ページの中に挿入される JavaScript や CSS（後述）。
  「matches」では、“Content Scripts”が挿入されるページのパターンを指定します（今回の場合は全てのページに挿入するように指定してあります）。

- permissions
  特定の API を使うためにはその権限をユーザからもらう必要があるので、どんな権限がほしいのかをここで記述します。
  どんな権限が必要になるかは、各 API のドキュメントを見ればわかります

- Content-Script
  Web ページの中に挿入する CSS と JavaScript のことを「Content Scripts」と呼びます。
  セキュリティ上の理由で、この手の JavaScript は独自の実行環境（isolated world）を持ち、挿入先の Web ページの DOM にはアクセスできるんですが、そのページで定義した変数や関数にアクセスすることはできません。

例えば、Web ページ側では jQuery1 系を利用していて、Content-Scripts 側では jQuery2 系を利用しても衝突することはありません。なぜならこの 2 種類のスクリプトはそれぞれ「別ワールド」に住んでいるので、お互いに干渉することがないからです。

数多くある 「Chrome.\* API」の中で、Content-Scripts は下記の一部の API しか利用できない制限があります。
ただし、「background ページ」とメッセージのやり取りをすることで「間接的に」利用することは可能です（後述）。

- background-page
  他の API も利用できる。常時動く

- event-page
  Background-Page の設定で、"persistent": false にすることで、いわゆる「Event Pages」にすることができます。
  Background-Page との違いは、「常に動いているわけではない

##  難易度設定方法
### 書評法　

あるいは、星４、５をつけている人は理解できる難易度であったと判定し、難易度にマイナス補正
ほし１～３の間は検索を行い、難易度表記に類似するものがあれば計算に組み込む

https://www.amazon.co.jp/gp/product/B0716B52LP　

https://www.amazon.co.jp/product-reviews/B0716B52LP

###　基礎データ法
発行年 =　単語の複雑化が行われる可能性
文字数　=　純粋に時間が増えるため読みづらくなると推定　＝　ページ数＊大きさ
目次の数　= 文章が別れていればそれなりに読みやすくなると推定
言語　= 今回は日本語のみ考察
価格　=　専門性を表す可能性がある（売れないって意味で

単語　=　サンプルで得られる文字を解析し、純粋に使われない単語は読みにくいと推定
文章　= 読点が入るまでの文章がながければ読みづらいと判定
### 基準学習法
書籍レベルを1~10くらいと過程できる入門書につけられたレビューを学習させ、それを10~20と段階的に行い100まで分析が終わったら、他の本についてのレビューとの類似度を確認して、レベルを設定する
## 難易度別経験値設定法
exp*(book_dificult - user_level)
同じジャンルで、ユーザーのレベルに近い書籍を並べる……。のがいいかも？それならサイトと拡張機能両方必要になる。

# 実装方法
javascript でamazonの情報を書き換える練習。
javascriptでページ内で自動検索、ページ数、サイズ、発行年を取得。
これを、ユーザーが開いているサイト及び、そのタイトルと一致する紀伊国屋あるいはbookmeeterを参照して難易度設定をする
つまり、一つのサイトを開き、そのサイトのタイトルと一致しているサイトを特定のサイトの中で検索し、その検索したサイトからデータを取得する。
document.titleでタイトルを抜き出し、それから、グーグル検索を行い、サイトに入り、データ取得か。= productTitle
出版年はkindleか否かで判定が面倒くさい

amazonのレビュー
単語数は紀伊国屋から撮ってくるhttps://www.kinokuniya.co.jp/f/dsg-01-9784877710514

### 文字数の計算
方法文字数はページ数掛ける判型（ただし、全て文字で埋められているとは考えにくいので、ここから20%引いたものとする）　
- B5	13級	31行	42字  1302字　1042字
- A5	13級	18行	51字 918字 734字
- 四六判	13級	17行	44字 748字 598字
- B6	13級	16行	42字 672字 537字
