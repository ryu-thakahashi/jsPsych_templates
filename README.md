# jsPsych_templates
jsPsych で実験する際のテンプレート

## 使い方

### 1. このリポジトリをクローンする

```bash
git clone https://github.com/ryu-thakahashi/jsPsych_templates.git
```

### 2. ディレクトリに移動する

```bash
cd jsPsych_templates
```

### 3. firebase init でプロジェクトを作成する

firebase-cli をインストールしていない場合は，`docs/how_to_install.md` を参照してください．

```bash
firebase init
```

基本的には Enter を押してデフォルトの設定で進める．入力が必要な項目では適当に入力する．

ただし，`Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices.`と表示された際には，以下の機能が選択された状態でスペースを押す．選択し終えたらEnter を押す．

- Hosting: Configure files for Firebase Hosting and (optionally) set  
up GitHub Action deploys
- Realtime Database: Configure a security rules file for Realtime Database and (optionally) provision default instance


### 4. プロジェクトをデプロイする

ターミナルで以下のコマンドを実行する．

```
firebase deploy
```

`Hosting URL: https://[project-id].web.app` にアクセスし，`Hello world!` と表示されていれば成功．

hosting 例： https://jspsych-templates.web.app