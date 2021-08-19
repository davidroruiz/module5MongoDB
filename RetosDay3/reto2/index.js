let moongose = require("mongoose");
let User = require("./userModel");
let Photo = require("./photoModel");

moongose.connect('mongodb://localhost:27017/relaciones',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });


let userDocument = new User({
    nombreUsuario: "xeAmanda",
    url: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DarkSoulsRemastered_image1600w.jpg",
    titulo: "Halterofilia",
    descripcion: "Mejora levantamiento de peso",
    login: "xeAmanda",
    password: "12345489",
    addressCredential: "xeAMD",
    phone: 659125156,
    email: "Amanda@gmail.com",
    name: "Amanda",
    surname: "Terremoto",
    dateOfBirth: 31 / 05 / 1995,
    comments: "El más TOP",
    rol: "El mas Trabajadora",
    //follow: ["611d83273075dc0c40a57532","611d83bf931e6a3f44c07725"],
    //photo: ["611d83273075dc0c40a57533"]
});


let photoDocument = new Photo({
    titulo: "DOOM",
    url: "https://i.redd.it/ctpkgwavkaf31.jpg",
    descripcion: "El mejor juego HEATY METAL",
   // user: ["611d83bf931e6a3f44c07725","611d83273075dc0c40a57532"]
});


//userDocument.save(checkRespuesta);
//photoDocument.save(checkRespuesta);

function checkRespuesta(err, res) {
    if (err) {
        console.log("Error: " + err);
    } else {
        console.log("Documento guardado correctamente");
        moongose.disconnect();
    }
}

async function updateUser() {
    try {
        const findPhotosTheUser = await User.updateOne({ _id: "611d8e854fd9951934afeed6"},{$set: {follow:  ["611d8e854fd9951934afeed6","611d83bf931e6a3f44c07725"]}});

        console.log(findPhotosTheUser);
    } catch (error) {
        console.log(error);
    }
}


//updateUser();

async function findPhotosTheUser(idUser) {
    try {
        const findPhotosTheUser = await Photo.findOne({ user: idUser}).populate('user');

        console.log(findPhotosTheUser);
    } catch (error) {
        console.log(error);
    }
}

//findPhotosTheUser("611d8e854fd9951934afeed6");


async function ObtenerTimeline(idUser) {
    try {
        const ObtenerTimeline = await User.findOne({ _id: idUser}).populate('follow').populate('photo');
        console.log(ObtenerTimeline);
    } catch (error) {
        console.log(error);
    }
}
ObtenerTimeline("611d8e854fd9951934afeed6");
