const moongose = require("mongoose");

const PhotoSchema = new moongose.Schema({

    url: String,
    titulo: String,
    descripcion: {
        type: String,
        validate: [ function(descripcion){
            return descripcion.length >= 6;
        },
        'La descripcion no cumple la longitud minima']
    },
    user: [{type: moongose.Schema.Types.ObjectId, ref: "User"}]
})
    
module.exports = moongose.model("Photo", PhotoSchema);