# umy-react-poke

-   🐑 Udemy 講座「ポケモン図鑑」の模写です
-   🐑 https://www.udemy.com/course/react-3project-app-udemy/

## 概要

-   PokeAPI を利用してポケモンの画像・名前・特性等を取得し描画します
-   ページ下部の Next/Prev ボタン 押下時に次に表示するデータを API 取得します

## 構成

```
./
  ├ public/
  ├	src/
  │  ├ components/	#描画の部品
  │  │  ├ Card
  │  │  │  ├ Card.js
  │  │  │  └ Card.css
  │  │  └ Navbar
  │  │     ├ Navbar.js
  │  │     └ Navbar.css
  │  │
  │  ├ utils/		#処理の部品
  │  │  └ pokemon.js
  │  │
  │  ├ App.css
  │  ├ App.js
  │  ├ index.css
  │  └ index.js
  │
  ├ package.json
  └ README.md

```

## next..

-   typescript 化
-   API コール..どうにかできるものなのか
