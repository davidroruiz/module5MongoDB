let moongose = require("mongoose");


let Peli = require("./pelisModel");
let Actor = require("./actorModel");

moongose.connect('mongodb://localhost:27017/OnetoMany',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let actorDocument = new Actor({
    nombre : "Robert",
    apellido : "Downey Jr.",
    edad: 56
});

let peliDocument = Peli({
    nombre : "Los Vengadores",
    actor : ["611d00a7b1e6692fb015753f","611d00eb2fafd95c1c6ebee4"]
})


//actorDocument.save(checkRespuesta);
//peliDocument.save(checkRespuesta);


//OnetoMany

async function insertarActorOnetoMany() {
    try {
        const insertarActorOnetoMany = await Actor.insertMany({
            nombre: "Amanda",
            apellido: "Mr.Top",
            edad : 27
        })
        console.log(insertarActorOnetoMany);
    } catch (error) {
        console.log(error);
    }
}

//insertarActorOnetoMany();


async function updateActorOnetoMany() {
    try {
        const updateActorOnetoMany = await Actor.updateOne({ "_id": "611d00a7b1e6692fb015753f","nombre": "Jhonny" }, { $set: { "nombre": "Scarlet" } });

        console.log(updateActorOnetoMany);
    } catch (error) {
        console.log(error);
    }
}

//updateActorOnetoMany();

async function findActor() {
    try {
        const findActor = await Actor.find({ "_id": "611d00a7b1e6692fb015753f"});
        console.log(findActor);
    } catch (error) {
        console.log(error);
    }
}

//findActor();


async function insertarPelisOnetoMany() {
    try {
        const insertarPelisOnetoMany = await Peli.insertMany({
            nombre: "Pokemon",
            actor: ["611d00eb2fafd95c1c6ebee4","611d00a7b1e6692fb015753f"]
        })
        console.log(insertarPelisOnetoMany);
    } catch (error) {
        console.log(error);
    }
}

//insertarPelisOnetoMany();


async function updatePelisOnetoMany() {
    try {
        const updatePelisOnetoMany = await Peli.updateOne({ "_id": "611d015c87d29d2394456462","nombre": "Los Vengadores" }, { $set: { "nombre": "Iron Man" } });

        console.log(updatePelisOnetoMany);
    } catch (error) {
        console.log(error);
    }
}

//updatePelisOnetoMany();

async function findPelis() {
    try {
        const findPelis = await Peli.findOne({ _id: "611d015c87d29d2394456462"}).populate('actor');
        console.log(findPelis);
    } catch (error) {
        console.log(error);
    }
}

findPelis();


