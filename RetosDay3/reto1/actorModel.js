const moongose = require("mongoose");

const actorSchema = new moongose.Schema(
    {
        nombre: String,
        apellido: String,
        edad:{
         type: Number,
         min: 20   
        }
    }

);

module.exports = moongose.model("Actor", actorSchema);