const path = require('path');
const express = require('express');
const app = express();
const port = 3002; // 適宜ポート番号を変更

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // viewsディレクトリのパスを設定
app.use(express.static(path.join(__dirname, 'public'))); // publicディレクトリのパスを設定

function getContributionsData() {
    const data = [];
    for (let i = 0; i < 365; i++) {
        data.push(Math.floor(Math.random() * 5));
    }
    return data;
}

app.get('/', (req, res) => {
    const contributions = getContributionsData();
    res.render('index', { contributions });
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
