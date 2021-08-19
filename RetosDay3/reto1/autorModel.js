const moongose = require("mongoose");

const autorSchema = new moongose.Schema(
    {
        nombre: String,
        edad:{
            type: Number,
            min: 18

        },
        libro: {type: moongose.Schema.Types.ObjectId, ref: "Libro"}
    }
);

module.exports = moongose.model("Autor", autorSchema);