const moongose = require("mongoose");
const UserSchema = new moongose.Schema({
    login: String,
    password: String
});

module.exports = moongose.model("User", UserSchema);