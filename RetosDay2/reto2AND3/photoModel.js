const moongose = require("mongoose");



const PhotoSchema = new moongose.Schema({

    usuario: String,
    url: String,
    titulo: String,
    descripcion: {
        type: String,
        validate: [ function(password){
            return password.length >= 6;
        },
        'El password no cumple la longitud minima']
    }})
    
module.exports = moongose.model("Photo", PhotoSchema);