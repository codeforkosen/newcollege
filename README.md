# newcollege 開設予定の大学等オープンデータ
 
- [令和5年度開設予定の大学等の設置に係る答申について（令和4年8月31日）：文部科学省](https://www.mext.go.jp/b_menu/shingi/daigaku/toushin/attach/1420729_00009.htm)

## サンプルアプリ

- [令和5年度開設予定の大学等 答申内容【判定を｢可｣とするもの】 オープンデータ 文部科学省より](https://codeforkosen.github.io/newcollege/)

## オープンデータ

- [2022-08 CSV](https://codeforkosen.github.io/newcollege/newcollege202208.csv) [附帯事項](https://codeforkosen.github.io/newcollege/newcollege202208-notes.csv)
- [2022-08 JSON](https://codeforkosen.github.io/newcollege/newcollege202208.json) ([JSON Schema](newcollege.schema.json), [d.ts](NewCollege.d.ts))

## How to Build

1. [令和5年度開設予定の大学等 答申内容【判定を｢可｣とするもの】 オープンデータ 文部科学省より](https://codeforkosen.github.io/newcollege/)のPDFをCSV化する
2. deno run -A makejson.js で、CSVからJSONをつくる

## How to make type

1. [JSON Schema](https://json-schema.org/)でスキーマ [newcollege.schema.json](newcollege.schema.json) をつくる
2. deno run -A makedts.js で、TypeScript型定義ファイルをつくる

## Test

1. deno run -A check.ts で、TypeScript型定義ファイルをチェック
2. deno run -A validate.js で、JSON Schema の適合性をチェック

