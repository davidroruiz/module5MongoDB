const moongose = require("mongoose");
const UserSchema = new moongose.Schema({
    name: String,
    email: String,
    role: String,
    verified: Boolean
});

module.exports = moongose.model("UserRemoto", UserSchema);