
const connection = require("./index");
let userModel = require("./usersModel");
let profileModel = require("./profileModel");
let credentialModel = require("./credentialModel");

// User
async function mostrarDatosUser(){
    try {
        const filtrarUser = await userModel.find({"login": "david"});
            console.log(filtrarUser);
    } catch (error) {
     console.log(error);   
    }
}

//mostrarDatosUser();

// Mostrar un campo especifico user

async function mostrarDatosPorCampoUser(){
    try {
        const filtrarUser = await userModel.find({"login": "David"},{"login":1});
            console.log(filtrarUser);
    } catch (error) {
     console.log(error);   
    }
}

//mostrarDatosPorCampoUser();

// Update por un campo user.

async function updateDatosPorCampoUser(){
    try {
        const updateUser = await userModel.updateOne({"login": "david"},{$set : {login : "David"}});
            console.log(updateUser);
    } catch (error) {
     console.log(error);   
    }
}

//updateDatosPorCampoUser();

// Eliminar un document user

async function deleteDatosPorCampoUser(){
    try {
        const deleteUser = await updateUser.remove({"_id": "611b878e6ae14c30ec1339cf"});
        console.log(deleteUser);
    } catch (error) {
     console.log(error);   
    }
}

//deleteDatosPorCampoUser();

// Profile

async function mostrarDatosProfile(){
    try {
        const filtrarProfile = await profileModel.find({"name": "Anime"});
            console.log(filtrarProfile);
    } catch (error) {
     console.log(error);   
    }
}

//mostrarDatosProfile();

// Mostrar un campo especifico Profile

async function mostrarDatosPorCampoProfile(){
    try {
        const filtrarProfile = await profileModel.find({"name": "Anime"},{"name":1});
            console.log(filtrarProfile);
    } catch (error) {
     console.log(error);   
    }
}

//mostrarDatosPorCampoUser();

// Update por un campo Profile.

async function updateDatosPorCampoProfile(){
    try {
        const updateProfile = await profileModel.updateOne({"name": "Anime"},{$set : {name : "anime"}});
            console.log(updateProfile);
    } catch (error) {
     console.log(error);   
    }
}

//updateDatosPorCampoProfile();

// Eliminar un document Profile

async function deleteDatosPorCampoProfile(){
    try {
        const deleteProfile = await updateUser.remove({"_id": "611b878e6ae14c30ec1339d0"});
        console.log(deleteProfile);
    } catch (error) {
     console.log(error);   
    }
}

//deleteDatosPorCampoProfile();

// Credential
async function mostrarDatosCredentials(){
    try {
        const filtrarCredential = await credentialModel.find({"phone": 658123456});
            console.log(filtrarCredential);
    } catch (error) {
     console.log(error);   
    }
}

//mostrarDatosCredentials();

// Mostrar un campo especifico Credential

async function mostrarDatosPorCampoCredential(){
    try {
        const filtrarCredential = await credentialModel.find({"phone": 658123456},{"phone":1});
            console.log(filtrarCredential);
    } catch (error) {
     console.log(error);   
    }
}

//mostrarDatosPorCampoCredential();

// Update por un campo Credential.

async function updateDatosPorCampoCredential(){
    try {
        const updateCredential = await credentialModel.updateOne({"phone": 658123456},{$set : {phone : 658123456}});
            console.log(updateCredential);
    } catch (error) {
     console.log(error);   
    }
}

//updateDatosPorCampoCredential();

// Eliminar un document Credential

async function deleteDatosPorCampoCredential(){
    try {
        const deleteCredential = await credentialModel.remove({"_id": "611b878e6ae14c30ec1339d1"});
        console.log(deleteCredential);
    } catch (error) {
     console.log(error);   
    }
}

//deleteDatosPorCampoCredential();

