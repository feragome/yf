const express = require('express');
const partials = require('express-partials');
const http = require('http');
const serverPort = 9020;
const app = express();

// EJS como motor de views
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
    res.status(200).render('pages/view');
});

// Inicializa el middleware Swagger
http.createServer(app).listen(serverPort, () => {
    console.log(`El servidor esta escuchando en el puerto ${serverPort}`);
});