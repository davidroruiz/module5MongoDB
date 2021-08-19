const moongose = require("mongoose");

const videojuegoSchema = new moongose.Schema(
    {
        nombre: String,
        descripcion:{
            type: String,
            min: 8
        } ,
        equipo: [{type: moongose.Schema.Types.ObjectId, ref: "Equipo"}]
    }
);

module.exports = moongose.model("Videojuego", videojuegoSchema);