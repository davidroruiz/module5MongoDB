const moongose = require("mongoose");

const pelisSchema = new moongose.Schema(
    {
        nombre: String,
        actor: [{type: moongose.Schema.Types.ObjectId, ref: "Actor"}]
    }
);

module.exports = moongose.model("Peli", pelisSchema);