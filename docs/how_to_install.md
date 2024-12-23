## firebase CLI をインストールする

公式リファレンス：
[Firebase CLI リファレンス  |  Firebase ドキュメント](https://firebase.google.com/docs/cli?hl=ja#windows-npm)

## npm のインストール (npm がインストールされていない場合)

### scoop をインストールする

ターミナルを起動し，以下のコマンドを実行

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

### nvm をインストールする

ターミナルを起動し，以下のコマンドを実行

```
scoop install nvm
```

インストールされているか，以下のコマンドで確認

```
nvm --version
```

version の数字 (e.g., 1.1.11) が表示されればインストール成功

### npm をインストールする


```
nvm install latest
```

インストールされているか，以下のコマンドで確認

```
npm --version
```

version の数字 (e.g., 10.9.1) が表示されればインストール成功

## firebase CLI をインストールする

以下のコマンドを実行

```
npm install -g firebase-tools
```

インストールされているか，以下のコマンドで確認

```
firebase --version
```

version の数字 (e.g., 13.29.1) が表示されればインストール成功


