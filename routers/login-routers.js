var router = require('express').Router();
var passport = require('passport');

router.get('/pag1',(req, res, next) => {
    res.render('pag1')
}); 

router.post('/pag1',(req, res, next) => {
    console.log(req.body);
    res.render('pag1')
}); 

router.get('/registro',(req, res, next) => {
    res.render('registro');
});

router.post('/registro', passport.authenticate('local-signup',{
    successRedirect:'/pag1',
    failureRedirect: '/registro',
    passReqToCallback: true
}));


module.exports = router;
