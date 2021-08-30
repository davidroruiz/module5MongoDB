const express = require("express");
const cors = require("cors");
const moongose = require("mongoose");
const Movie = require("./model/movieModel");
const Professional = require("./model/professionalModel");
const MONGO_USER = "root";
const MONGO_PASSWORD = "root";
const MONGO_HOST = "imdb.6c3qc.mongodb.net";
const MONGO_BDD = "myFirstDatabase?retryWrites=true&w=majority";

const corsOptions = {
    "Access-Control-Allow-Methods": ['GET', 'PUT', 'POST', 'DELETE']
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const urlDataBase = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_BDD}`;

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;

moongose.connect(
    urlDataBase,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });



    app.get("/peliculas",
    function (request, response) {
    
        const id = request.query.id;
    
        let sendBody = {
            "status": null,
            "mensage": null,
            "data": null
        };
    
        if (id) {
            Movie.findOne({"_id": id })
                .then((res) => {
                    sendBody.status = 200;
                    sendBody.mensage = `Se sacana los datos con el id ${id}`
                    sendBody.data = res;
                    response.status(200).send(sendBody);
                })
                .catch((err => {
                    sendBody.status = 400;
                    sendBody.mensage = `Se sacan los datos con el id ${id}`
                    response.status(400).send(sendBody);
                    console.log(err);
                }));
    
        } else {
            Movie.find({})
                .then((res) => {
                    sendBody.status = 200;
                    sendBody.mensage = `Se sacana los datos`
                    sendBody.data = res;
                    response.status(200).send(sendBody);
                })
                .catch((err => {
                    sendBody.status = 400;
                    sendBody.mensage = `Ha habido un problema`
                    response.status(400).send(sendBody);
                    console.log(err);
                }));
        };
    });


    app.post("/peliculas", (req, res) => {

        const { title, releaseYear, actors, nacionality, director, writer, language, plataform,
            isMCU, mainCharacterName, producer, distributor, genre } = req.body;
    
    
        let sendBody = {
            "status": null,
            "mensage": null,
            "data": null
        };
    
    
        Movie.create({
            title, releaseYear, actors, nacionality, director, writer, language, plataform,
            isMCU, mainCharacterName, producer, distributor, genre 
        })
    
            .then((response) => {
                sendBody.status = 200;
                sendBody.mensage = `Se crea objeto`;
                sendBody.data = response;
                res.status(200).send(sendBody);
            })
            .catch((err) => {
                sendBody.status = 409;
                sendBody.mensage = `Ha habido un problema al crear el objeto`;
                res.status(409).send(sendBody);
                console.log(err);
            })
    });
    
    

    app.get("/peliculas/actor",
    function (request, response) {
    
        const id = request.query.id;
    
        let sendBody = {
            "status": null,
            "mensage": null,
            "data": null
        };
    
        if (id) {
            Movie.findOne({"_id": id }, { actors: 1 }).populate('actors')
                .then((res) => {
                    sendBody.status = 200;
                    sendBody.mensage = `Se sacana los datos con el id ${id}`
                    sendBody.data = res;
                    response.status(200).send(sendBody);
                })
                .catch((err => {
                    sendBody.status = 400;
                    sendBody.mensage = `Se sacan los datos con el id ${id}`
                    response.status(400).send(sendBody);
                    console.log(err);
                }));
    
        } else {
            Movie.findOne({}, { actors: 1 }).populate('actors')
                .then((res) => {
                    sendBody.status = 200;
                    sendBody.mensage = `Se sacana los datos`
                    sendBody.data = res;
                    response.status(200).send(sendBody);
                })
                .catch((err => {
                    sendBody.status = 400;
                    sendBody.mensage = `Ha habido un problema`
                    response.status(400).send(sendBody);
                    console.log(err);
                }));
        };
    });

    

    app.get("/peliculas/director",
    function (request, response) {
    
        const id = request.query.id;
    
        let sendBody = {
            "status": null,
            "mensage": null,
            "data": null
        };
    
        if (id) {
            Movie.findOne({"_id": id }, { director: 1 }).populate('director')
                .then((res) => {
                    sendBody.status = 200;
                    sendBody.mensage = `Se sacana los datos con el id ${id}`
                    sendBody.data = res;
                    response.status(200).send(sendBody);
                })
                .catch((err => {
                    sendBody.status = 400;
                    sendBody.mensage = `Se sacan los datos con el id ${id}`
                    response.status(400).send(sendBody);
                    console.log(err);
                }));
    
        } else {
            Movie.findOne({}, { director: 1 }).populate('director')
                .then((res) => {
                    sendBody.status = 200;
                    sendBody.mensage = `Se sacana los datos`
                    sendBody.data = res;
                    response.status(200).send(sendBody);
                })
                .catch((err => {
                    sendBody.status = 400;
                    sendBody.mensage = `Ha habido un problema`
                    response.status(400).send(sendBody);
                    console.log(err);
                }));
        };
    });

    
    app.get("/peliculas/guionista",
    function (request, response) {
    
        const id = request.query.id;
    
        let sendBody = {
            "status": null,
            "mensage": null,
            "data": null
        };
    
        if (id) {
            Movie.findOne({"_id": id }, { writer: 1 }).populate('writer')
                .then((res) => {
                    sendBody.status = 200;
                    sendBody.mensage = `Se sacana los datos con el id ${id}`
                    sendBody.data = res;
                    response.status(200).send(sendBody);
                })
                .catch((err => {
                    sendBody.status = 400;
                    sendBody.mensage = `Se sacan los datos con el id ${id}`
                    response.status(400).send(sendBody);
                    console.log(err);
                }));
    
        } else {
            Movie.findOne({}, { writer: 1 }).populate('writer')
                .then((res) => {
                    sendBody.status = 200;
                    sendBody.mensage = `Se sacana los datos`
                    sendBody.data = res;
                    response.status(200).send(sendBody);
                })
                .catch((err => {
                    sendBody.status = 400;
                    sendBody.mensage = `Ha habido un problema`
                    response.status(400).send(sendBody);
                    console.log(err);
                }));
        };
    });

    
    app.get("/peliculas/productora",
    function (request, response) {
    
        const id = request.query.id;
    
        let sendBody = {
            "status": null,
            "mensage": null,
            "data": null
        };
    
        if (id) {
            Movie.findOne({"_id": id }, { producer: 1 }).populate('producer')
                .then((res) => {
                    sendBody.status = 200;
                    sendBody.mensage = `Se sacana los datos con el id ${id}`
                    sendBody.data = res;
                    response.status(200).send(sendBody);
                })
                .catch((err => {
                    sendBody.status = 400;
                    sendBody.mensage = `Se sacan los datos con el id ${id}`
                    response.status(400).send(sendBody);
                    console.log(err);
                }));
    
        } else {
            Movie.findOne({}, { producer: 1 }).populate('producer')
                .then((res) => {
                    sendBody.status = 200;
                    sendBody.mensage = `Se sacana los datos`
                    sendBody.data = res;
                    response.status(200).send(sendBody);
                })
                .catch((err => {
                    sendBody.status = 400;
                    sendBody.mensage = `Ha habido un problema`
                    response.status(400).send(sendBody);
                    console.log(err);
                }));
        };
    });

    
    app.post("/peliculas/actor", (req, res) => {

        const id = req.query.id;
        const actor = req.query.actor;
        Movie.findByIdAndUpdate(id, [{"actors":actor}], {new:true},(err, userUpdate) => {
            if (err) res.status(500).send({ message: `Error al actualizar el User: ${err}` })
            res.status(200).send({ user: userUpdate })
        })

      
    });

    
    app.post("/peliculas/director", (req, res) => {

        const id = req.query.id;
        const director = req.query.director;
        Movie.findByIdAndUpdate(id, [{"director":director}], {new:true},(err, userUpdate) => {
            if (err) res.status(500).send({ message: `Error al actualizar el User: ${err}` })
            res.status(200).send({ user: userUpdate })
        })

      
    });
    
    
    app.post("/peliculas/guionista", (req, res) => {

        const id = req.query.id;
        const guionista = req.query.guionista;
        Movie.findByIdAndUpdate(id, [{"writer":guionista}], {new:true},(err, userUpdate) => {
            if (err) res.status(500).send({ message: `Error al actualizar el User: ${err}` })
            res.status(200).send({ user: userUpdate })
        })

      
    });
    
    


app.put("/peliculas", (req, res) => {

    const id = req.query.id;
    const update = req.body.title;

    const movies = {title: req.body.title,
        releaseYear: req.body.releaseYear,
        actors: req.body.actors,
        nacionality: req.body.nacionality,
        director: req.body.director,
        writer: req.body.writer,
        language: req.body.language,
        plataform: req.body.plataform,
        isMCU: req.body.isMCU,
        mainCharacterName: req.body.mainCharacterName,
        producer: req.body.producer,
        distributor: req.body.distributor,
        genre: req.body.genre
    

    };

    Movie.findByIdAndUpdate(id, movies, {new:true}, (err, professionalUpdate) => {
        if (err) res.status(500).send({ message: `Error al acctualizar el Professional: ${err}` })
        res.status(200).send({ user: professionalUpdate })
    })

});


app.delete("/peliculas", (req, res) => {

    const id = req.query.id;

    Movie.findByIdAndDelete(id, function (err, resultado) {
        if (err) {
            console.log(err);
            return res.status(500).json({ "Error": "No se pudo eliminar el Professional" })
        }
        res.status(200).json({ 'ProfessionalEliminado': resultado.ok })
    })

});

app.delete("/peliculas/actor", (req, res) => {

    const id = req.query.id;

    Movie.findByIdAndUpdate(id, {"actors": null }, {new:true},(err, userUpdate) => {
        if (err) res.status(500).send({ message: `Error al actualizar el User: ${err}` })
        res.status(200).send({ user: userUpdate })
    })

});

app.delete("/peliculas/director", (req, res) => {

    const id = req.query.id;

    Movie.findByIdAndUpdate(id, { "director": null }, {new:true},(err, userUpdate) => {
        if (err) res.status(500).send({ message: `Error al actualizar el User: ${err}` })
        res.status(200).send({ user: userUpdate })
    })

});

app.delete("/peliculas/guionista", (req, res) => {

    const id = req.query.id;

    Movie.findByIdAndUpdate(id, { "writer": null }, {new:true},(err, userUpdate) => {
        if (err) res.status(500).send({ message: `Error al actualizar el User: ${err}` })
        res.status(200).send({ user: userUpdate })
    })

});

app.listen(PORT, () => {
    console.log(`Api is listen on host ${HOST} and port ${PORT}`);
})