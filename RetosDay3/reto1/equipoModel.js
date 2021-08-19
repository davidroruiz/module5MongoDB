const moongose = require("mongoose");

const equipoSchema = new moongose.Schema(
    {
        nombre: String,
        videojuego: [{type: moongose.Schema.Types.ObjectId, ref: "Videojuego"}]
    }
);

module.exports = moongose.model("Equipo", equipoSchema);