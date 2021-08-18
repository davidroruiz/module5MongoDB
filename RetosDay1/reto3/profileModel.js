const moongose = require("mongoose");
const ProfileSchema = new moongose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol: String
});

module.exports = moongose.model("Profile", ProfileSchema);