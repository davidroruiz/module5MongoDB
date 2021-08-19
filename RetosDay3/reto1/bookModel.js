const moongose = require("mongoose");

const bookSchema = new moongose.Schema(
    {
        titulo: String,
        nPaginas: {
        type: Number,
        min: 20   
        }
    }

);

module.exports = moongose.model("Libro", bookSchema);