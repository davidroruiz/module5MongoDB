let moongose = require("mongoose");

let Book = require("./bookModel");
let Autor = require("./autorModel");


moongose.connect('mongodb://localhost:27017/OnetoOne',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let bookDocument = new Book({
    titulo : "Dark Soul 1",
    nPaginas : 100
});


let autorDocument = new Autor({
    autor : "Artorias",
    edad: 26,
    libro : "611cfca987eb2466280a6923"
})

/*
//bookDocument.save(checkRespuesta);
//autorDocument.save(checkRespuesta);


function checkRespuesta(err, res){
    if(err){
        console.log("Error: " + err);
    }else{
        console.log("Documento guardado correctamente");
        moongose.disconnect();
    }
}

//OneToOne
async function insertarAutorOnetoOne() {
    try {
        const insertarAutorOnetoOne = await Autor.insertMany({
            nombre : "Federico",
            edad : 29,
            libro : "611cfca987eb2466280a6923"
        })
        console.log(insertarAutorOnetoOne);
    } catch (error) {
        console.log(error);
    }
}

//insertarAutorOnetoOne();

async function updateAutorOnetoOne() {
    try {
        const updateAutorOnetoOne = await Autor.updateOne({ "_id": "611cfd79a693635f3cf0526c","edad": 29 }, { $set: { "edad": 26 } });

        console.log(updateAutorOnetoOne);
    } catch (error) {
        console.log(error);
    }
}

//updateAutorOnetoOne();

async function findAutor() {
    try {
        const findAutor = await Autor.find({ _id: "611cfd79a693635f3cf0526c" }).populate('libro');
        console.log(findAutor);
    } catch (error) {
        console.log(error);
    }
}

findAutor();

async function insertarBookOnetoOne() {
    try {
        const insertarAutorOnetoOne = await Autor.insertMany({
            titulo: "Harry Potter",
            nPaginas: 50
        })
        console.log(insertarAutorOnetoOne);
    } catch (error) {
        console.log(error);
    }
}

//insertarBookOnetoOne();

async function updateBookOnetoOne() {
    try {
        const updateBookOnetoOne = await Book.updateOne({ _id : "611cfca987eb2466280a6923","titulo": "Dark Soul 1" }, { $set: { "titulo": "DOOM" } });

        console.log(updateBookOnetoOne);
    } catch (error) {
        console.log(error);
    }
}

//updateBookOnetoOne();

async function findBook() {
    try {
        const findBook = await Book.find({ _id: "611cfca987eb2466280a6923"});
        console.log(findBook);
    } catch (error) {
        console.log(error);
    }
}

//findBook();
*/