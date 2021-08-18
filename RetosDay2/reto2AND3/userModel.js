const moongose = require("mongoose");

const UserSchema = new moongose.Schema({
    
    nombreUsuario: String,
    url: String,
    titulo: String,
    descripcion: String,
    login: String,
    password: {
        type: String,
        validate: [
            function (password) {
                return password.length >= 6;
            },
            'El password deberia ser mas largo']
    },

    addressCredential: String,
    phone: Number,
    email: String,
    name: String,
    surname: String,
    dateOfBirth: {
        type: Date,
        validate: [
            function(dateOfBirth){
                return dateOfBirth < 01/05/2021;
            },
            'El Año de nacimiento deberia ser mas largo']

        
    },
    comments: String,
    rol: String,
    enum:["User","Full-User","Admin"],
    follow: String

   
});

UserSchema.pre('save', function (next) {
    if (this.email.includes("@")) {
        next();
    } else {
        next(new Error("El correo no tiene un formato valido"))
    }
});

module.exports = moongose.model("User", UserSchema);