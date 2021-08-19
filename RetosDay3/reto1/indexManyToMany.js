let moongose = require("mongoose");


let Equipo = require("./equipoModel");
let Videojuego = require("./videojuegoModel");

moongose.connect('mongodb://localhost:27017/ManytoMany',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let equipoDocument = Equipo({
    nombre : "Epic Games",
   videojuego : ["611d168b73e0283e702e8130","611d5c39893d47527c36297a"]
})

let videojuegoDocument = Videojuego({
    nombre: "Fortnite",
    descripcion : "El mejor juego de 2021",
    equipo : ["611d168b73e0283e702e812f","611d178afd3ea64730fa6efe"]
})



//equipoDocument.save(checkRespuesta);
//videojuegoDocument.save(checkRespuesta);

function checkRespuesta(err, res){
    if(err){
        console.log("Error: " + err);
    }else{
        console.log("Documento guardado correctamente");
        moongose.disconnect();
    }
}

//ManytoMany

async function insertarEquipoManytoMany() {
    try {
        const insertarEquipoManytoMany = await Equipo.insertMany({
            nombre: "Rare",
            videojuego: "611d162a7da0f16784fdd77e"
        })
        console.log(insertarEquipoManytoMany);
    } catch (error) {
        console.log(error);
    }
}

//insertarEquipoManytoMany();


async function updateEquipoManytoMany() {
    try {
        const updateEquipoManytoMany = await Equipo.updateOne({ "_id": "611d162a7da0f16784fdd77d","nombre": "SquareEnix" }, { $set: { "nombre": "Square" } });

        console.log(updateEquipoManytoMany);
    } catch (error) {
        console.log(error);
    }
}

//updateEquipoManytoMany();



async function findEquipos() {
    try {
        const findEquipos = await Equipo.findOne({_id: "611d178afd3ea64730fa6efe"}).populate('videojuego');
        console.log(findEquipos);
    } catch (error) {
        console.log(error);
    }
}

//findEquipos();


async function insertarVideojuegoManytoMany() {
    try {
        const insertarVideojuegoManytoMany = await Videojuego.insertMany({
            nombre: "Sea Of Thieves",
            descripcion: "Los Videojuegos más Top del 2021",
            equipo: ["611d178afd3ea64730fa6efe","611d5b2f0ced412e80fc7dfc"]
        })
        console.log(insertarVideojuegoManytoMany);
    } catch (error) {
        console.log(error);
    }
}

//insertarVideojuegoManytoMany();


async function updateVideojuegoManytoMany() {
    try {
        const updateVideojuegoManytoMany = await Videojuego.updateOne({ "_id": "611d162a7da0f16784fdd77e","nombre": "Dark Soul" }, { $set: { "nombre": "Sea Of Thieves" } });

        console.log(updateVideojuegoManytoMany);
    } catch (error) {
        console.log(error);
    }
}

//updateVideojuegoManytoMany();

async function findVideojuegos() {
    try {
        const findVideojuegos = await Videojuego.findOne({ _id: "611d64e8eda7d91478dd31b2"}).populate('equipo');
        console.log(findVideojuegos);
    } catch (error) {
        console.log(error);
    }
}

findVideojuegos();