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

app.get('/hb', (req, res, next) => {
    res.status(200).json({'hi':'bye'});
});

// Inicializa el middleware Swagger
http.createServer(app).listen(process.env.PORT || serverPort, () => {
    console.log(`El servidor esta escuchando en el puerto ${process.env.PORT || serverPort}`);
});