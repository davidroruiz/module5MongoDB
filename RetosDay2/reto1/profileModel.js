const moongose = require("mongoose");
const ProfileSchema = new moongose.Schema({
    name: String,
    surname: String,
    dateOfBirth: {
        type: Date,
        validate: [
            function(dateOfBirth){
                return dateOfBirth > 01/05/2021;
            },
            'Tienes que ser mas mayor']

        
    },
    comments: String,
    rol: String,
    enum:["User","Full-User","Admin"]
});

module.exports = moongose.model("Profile", ProfileSchema);