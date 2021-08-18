let moongose = require("mongoose");
let User = require("./userModel");
let Photo = require("./photoModel");

moongose.connect('mongodb://localhost:27017/validaciones',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });


let userDocument = new User({
    nombreUsuario: "xeDeivid",
    url: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DarkSoulsRemastered_image1600w.jpg",
    titulo: "Gwyn",
    descripcion: "Enemigo de Dark Soul",
    login: "xeDeivid",
    password: "12345489",
    addressCredential: "xeAMAD",
    phone: 659125156,
    email: "Deivid@gmail.com",
    name: "Deivid",
    surname: "Rodriguez",
    dateOfBirth: 31 / 05 / 1995,
    comments: "El más TOP",
    rol: "El mas Trabajadora",
    follow: "_id(611bc886e6cce7230014d423)"
});


let photoDocument = new Photo({
    usuario: "_id(611bcfd87680b918ec97057c)",
    url: "https://i.redd.it/ctpkgwavkaf31.jpg",
    titulo: "Kingdom Hearts",
    descripcion: "Enem",
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


async function subidaPhotos() {
    try {
        const subidaPhotos = await Photo.insertMany({
            usuario: "_id(611bcfd87680b918ec97057c)",
            url: "https://store-images.s-microsoft.com/image/apps.55563.14303655336501012.2beb08d9-395e-453b-b5e3-0d4ac24d9d15.f9a0e430-b546-45f8-85f1-1d2b90bb84d5?mode=scale&q=90&h=1080&w=1920",
            titulo: "DOOM",
            descripcion: "Juego más Heavy"
        })
        console.log(subidaPhotos);
    } catch (error) {
        console.log(error);
    }
}

//subidaPhotos();

async function ObtenerPhotos() {
    try {
        const ObtenerPhotos = await Photo.find({ "usuario": "_id(611bc886e6cce7230014d423)" });
        console.log(ObtenerPhotos);
    } catch (error) {
        console.log(error);
    }
}
//ObtenerPhotos();

async function seguir() {
    try {

        const seguir = await User.updateMany({ "login": "xeDeivid" }, { $set: { "follow": "_id(611c32d0753cff4724724b0b)" } });
        console.log(seguir);
    } catch (error) {
        console.log(error);
    }
}

//seguir();


async function DejarTheseguir() {
    try {
            const dejarTheSeguir = await User.updateOne({ "nombreUsuario": "xeDeivid", "follow":"_id(611bc886e6cce7230014d423)" }, { $set: { "follow": null} });
            if(dejarTheSeguir.n == 1){
                console.log("Has dejado de seguir");
            }else{
                console.log("No has dejado de seguir");
            }
            console.log(dejarTheSeguir);
       

    } catch (error) {
        console.log(error);
    }
}

//DejarTheseguir();

async function eliminarPhoto() {
    try {
        const eliminarThePhoto = await Photo.deleteOne({ "usuario": "_id(611bc886e6cce7230014d423)" }, { "titulo": "Gwyn" });
        console.log(eliminarThePhoto);
    } catch (error) {
        console.log(error);
    }
}

//eliminarThePhoto();

async function eliminarAllPhoto() {
    try {
        const eliminarAllThePhoto = await Photo.deleteMany({ "usuario": "_id(611bc886e6cce7230014d423)" });
        console.log(eliminarAllThePhoto);
    } catch (error) {
        console.log(error);
    }
}

//eliminarAllPhoto();

