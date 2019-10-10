const mongoose = require('mongoose');
const bcrypt= require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    password: String,
    paginas:Array,
    entradas: Array,
    multimedia: Array,
    comentarios: Array,
    shortcuts: Array,
    plantillas: Array,
    roles: Array,
    tipoUsuario: String 
});

//Capturar la contraseña y generar el cifrado
userSchema.methods.generateHash = (clave) => {
    return bcrypt.hashSync(clave, bcrypt.genSaltSync(10));
};

userSchema.methods.validatePassword = (clave) => {
    return bcrypt.compareSync(clave, this.clave);
}

module.exports = mongoose.model('usuarios', userSchema);