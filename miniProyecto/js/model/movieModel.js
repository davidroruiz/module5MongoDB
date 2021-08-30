const moongose = require("mongoose");

const MovieSchema = new moongose.Schema({

    title: String,
    releaseYear: Number,
    actors: [{ type: moongose.Schema.Types.ObjectId, ref: "Professional" }],
    nacionality: String,
    director: [{ type: moongose.Schema.Types.ObjectId, ref: "Professional" }],
    writer: [{ type: moongose.Schema.Types.ObjectId, ref: "Professional" }],
    language: String,
    plataform: String,
    isMCU: Boolean,
    mainCharacterName: String,
    producer: [{ type: moongose.Schema.Types.ObjectId, ref: "Professional" }],
    distributor: String,
    genre: String

})

module.exports = moongose.model("Movie", MovieSchema);