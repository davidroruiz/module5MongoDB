const express = require("express");
const cors = require("cors");
const moongose = require("mongoose");
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



app.get("/professionales",
    function (request, response) {

        const id = request.query.id;


        let sendBody = {
            "status": null,
            "mensage": null,
            "data": null
        };

        if (id == null) {
            
            Professional.find()
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
                

        } else{

            
            Professional.findById({ "_id": id })
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
        };
    });

app.post("/professionales", (req, res) => {

    const { name, age, genre, weight, height, hairColor, eyeColor, race,
        isRetired, nationality, oscarNumbers, profession } = req.body;


    let sendBody = {
        "status": null,
        "mensage": null,
        "data": null
    };


    Professional.create({
        name, age, genre, weight, height, hairColor, eyeColor, race,
        isRetired, nationality, oscarNumbers, profession
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


app.put("/professionales", (req, res) => {

    const id = req.query.id;
    const update = req.body;

    Professional.findByIdAndUpdate(id, update, {new:true}, (err, professionalUpdate) => {
        if (err) res.status(500).send({ message: `Error al acctualizar el Professional: ${err}` })
        res.status(200).send({ user: professionalUpdate })
    })

});

app.delete("/professionales", (req, res) => {

    const id = req.query.id;

    Professional.findByIdAndDelete(id, function (err, resultado) {
        if (err) {
            console.log(err);
            return res.status(500).json({ "Error": "No se pudo eliminar el Professional" })
        }
        res.status(200).json({ 'ProfessionalEliminado': resultado.ok })
    })

});



app.listen(PORT, () => {
    console.log(`Api is listen on host ${HOST} and port ${PORT}`);
})