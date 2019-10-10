var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var User= require('../models/usuarios');

passport.serializeUser((user,done)=>{
    done(null, user.id);
});

passport.deserializeUser( async (id,done) =>{
   var user = await User.findById(id);
   done(null, user);

});

passport.use('local-signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    var user = new User();
    user.email = email;
    user.password = password;
    await user.save();
    done(null, user); 
} ));