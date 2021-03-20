本の難易度を設定し、経験値を振る拡張機能

# 起きたエラー一覧

##　デバック段階

- Default locale was specified, but \_locales subtree is missing.
  インストール時の問題。
  翻訳すると『デフォルトのロケールが指定されましたが、\_locales サブツリーがありません。』
- 参考
  https://mizominton.hatenablog.jp/entry/chrome-extension#Default-locale-was-specified-but-_locales-subtree-is-missing

- Could not load icon 'knowledge.svg' specified in 'browser_action'.

# 基本事項

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
