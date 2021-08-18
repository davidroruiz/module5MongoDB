const moongose = require("mongoose");
const UserSchema = new moongose.Schema({
    login: String,
    password: {
        type: String,
        validate: [
        function(password){
            return password.length >= 6;
        },
        'El password deberia ser mas largo']
    },
});

module.exports = moongose.model("User", UserSchema);