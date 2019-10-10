var express = require("express");
var database = require("./modules/database");
//var path= require("path");
//var usuariosRouter = require("./routers/usuarios-router");
var app = express();
var mongoose= require('mongoose');
var passport = require('passport');
var flash= require('connect-flash');
//var bodyParser = require('body-parser');
var session = require('express-session');
var morgan = require("morgan");

//app.use('/usuarios',usuariosRouter);
require('./passport/local-auth');
// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(session({
  secret: 'mysecretsession',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    console.log(app.locals)
    next();
  });

//configurando passport para luego implementarlo
//require('./passport')(passport);

//Middleware
//app.use(bodyParser.urlencoded());
//app.use(session({
  //  secret: 'rhampage',
  //  resave:false,
  //  saveUninitialized: false
//}));
//app.use(passport.initialize());
//app.use(passport.session());
//app.use(flash());

//Routes
//require('./routers')(app, passport);
app.use(express.static("Administrador"));
//app.use(express.static("login"));





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

