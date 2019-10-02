var express = require("express");
var database = require("./modules/database");
//var usuariosRouter = require("./routers/usuarios-router");
var app = express();

app.use(express.static("Administrador"));
//app.use('/usuarios',usuariosRouter);


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/comentarios', (req, res) => {
    res.render('comentarios');
})

app.get('/multimedia', (req, res) => {
    res.render('multimedia');
})

app.get('/paginaNueva', (req, res) => {
    res.render('paginaNueva');
})

app.get('/paginas', (req, res) => {
    res.render('paginas');
})

app.get('/plantillas', (req, res) => {
    res.render('plantillas');
})

app.get('/posts', (req, res) => {
    res.render('posts');
})

app.get('/usuarios', (req, res) => {
    res.render('usuarios');
})

app.listen(3336, function(){
    console.log("Servidor en linea");
});

