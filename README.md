# 概要
LPからカート・マイページに遷移して買い物や管理ができる
## カート(pages/ec)
- wifi端末購入
- サンクスクロス

## マイページ(pages/mypage)
お客様専用情報ページ
- ギガのチャージ
- お客様情報の修正
- 使用ギガの可視化

## LP(pages/index.vue)
カート、マイページ遷移導線の設置

# 使い方
1. `git clone`
2. appディレクトリで`npm install`
3. appディレクトリで`npm run dev`
4. appディレクトリで`npm run build`

*現時点での使い方

# 使用技術
## フロント(pacages/app)
Nuxt.js
TypeScript
vuetify

## バックエンド(packages/api)
Go

## DB
MySQL

## インフラ(実装予定)
CDK
ECR
CI/CD(Github Actinons)