let moongose = require("mongoose");
let userModel = require("./usersModel");
let profileModel = require("./profileModel");
let credentialModel = require("./credentialModel");

moongose.connect('mongodb://localhost:27017/validaciones',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let userDocument = new userModel({
    login: "XeAmanda",
    password: "12345456"
});

let profileDocument = new profileModel({
    name: "Dark Soul",
    surname: "RPG",
    dateOfBirth: 31-05-1995,
    comments: "El mejor Juego de la historia",
    rol: "Admin"
});

let credentialDocument = new credentialModel({
    address: "C/DarkSoul",
    phone: 658123456,
    email: "amandal@gmail.com"
});


userDocument.save(checkRespuesta);
profileDocument.save(checkRespuesta);
credentialDocument.save(checkRespuesta);

function checkRespuesta(err, res){
    if(err){
        console.log("Error: " + err);
    }else{
        console.log("Documento guardado correctamente");
        moongose.disconnect();
    }
}

