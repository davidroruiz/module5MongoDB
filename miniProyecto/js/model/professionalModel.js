const moongose = require("mongoose");

const ProfessionalSchema = new moongose.Schema({

    name: String,
    age: Number,
    genre: String,
    weight: String,
    height: String,
    hairColor: String,
    eyeColor: String,
    race: String,
    isRetired: Boolean,
    nationality: String,
    oscarNumbers: Number,
    profession: String,


});

module.exports = moongose.model("Professional", ProfessionalSchema);