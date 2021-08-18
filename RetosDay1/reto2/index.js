let moongose = require("mongoose");
let UserRemoto = require("./userMDB");

moongose.connect('mongodb://localhost:27017/codenocth',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
/*
let userDocument = new UserRemoto({
    name : "Juanito",
    email: "juanito@gmail.com",
    role: "El Juanito",
    verified: true
});

userDocument.save(checkRespuesta);
*/

// Mostrar todos los campos

async function mostrarDatos(){
    try {
        const filtrarUser = await UserRemoto.find({"role": "El Juanito"});
            console.log(filtrarUser);
    } catch (error) {
     console.log(error);   
    }
}

//mostrarDatos();

// Mostrar un campo especifico

async function mostrarDatosPorCampo(){
    try {
        const filtrarUser = await UserRemoto.find({"role": "El Juanito"},{"name":1});
            console.log(filtrarUser);
    } catch (error) {
     console.log(error);   
    }
}

//mostrarDatosPorCampo();

// Update por un campo.

async function updateDatosPorCampo(){
    try {
        const updateUser = await UserRemoto.updateOne({"role": "El Junito el Puto Amo"},{$set : {role : "El Junito"}});
            console.log(updateUser);
    } catch (error) {
     console.log(error);   
    }
}

//updateDatosPorCampo();

// Eliminar un document

async function deleteDatosPorCampo(){
    try {
        const deleteUser = await UserRemoto.remove({"_id": "611aee4da931c80710549955"});
        console.log(deleteUser);
    } catch (error) {
     console.log(error);   
    }
}

//deleteDatosPorCampo();

function checkRespuesta(err, res){
    if(err){
        console.log("Error: " + err);
    }else{
        console.log("Documento guardado correctamente");
        moongose.disconnect();
    }
}

