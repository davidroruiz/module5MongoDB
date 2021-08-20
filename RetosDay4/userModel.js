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
                return password.length >= 6 ||password.includes(" ") ;
            },
            'El password deberia ser mas largo']
    },

    addressCredential: String,
    phone: Number,
    email: String,
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol: String,
    enum:["User","Full-User","Admin"],
    follow: [{type: moongose.Schema.Types.ObjectId, ref: "User"}],
    photo: [{type: moongose.Schema.Types.ObjectId, ref: "Photo"}],



   
});

UserSchema.pre('save', function (next) {
    if (this.email.includes("@")) {
        next();
    } else {
        next(new Error("El correo no tiene un formato valido"))
    }
});

module.exports = moongose.model("User", UserSchema);