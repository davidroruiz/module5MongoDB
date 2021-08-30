const express = require("express");
const cors = require("cors");
const moongose = require("mongoose");

const User = require("./userModel");
const Photo = require("./photoModel");

const corsOptions = {
    "Access-Control-Allow-Methods": ['GET', 'PUT', 'POST', 'DELETE']
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const urlDataBase = 'mongodb://localhost:27017/apiMongo';
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;

moongose.connect(
    urlDataBase,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });


// CRUD Básico

app.get("/usuarios",
    function (request, response) {

        const id = request.query.id;

        let sendBody = {
            "status": null,
            "mensage": null,
            "data": null
        };

        if (id) {
            User.findOne({ "_id": id }).populate('follow').populate('photo')
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
            User.findOne({}).populate('follow').populate('photo')
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


app.post("/usuarios", (req, res) => {

    const { nombreUsuario, url, titulo, descripcion,
        login, password, addressCredential, phone, email, name, surname, dateOfBirth,
        comments, rol, follow, photo } = req.body;


    let sendBody = {
        "status": null,
        "mensage": null,
        "data": null
    };


    User.create({
        nombreUsuario, url, titulo, descripcion,
        login, password, addressCredential, phone, email, name, surname, dateOfBirth,
        comments, rol, follow, photo
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

app.put("/usuarios", (req, res) => {

    const id = req.query.id;
    const update = req.body;

    User.findByIdAndUpdate(id, update, {new:true},(err, userUpdate) => {
        if (err) res.status(500).send({ message: `Error al acctualizar el User: ${err}` })
        res.status(200).send({ user: userUpdate })
    })

});




app.delete("/usuarios", (req, res) => {

    const id = req.query.id;

    User.findByIdAndDelete(id, function (err, resultado) {
        if (err) {
            console.log(err);
            return res.status(500).json({ "Error": "No se pudo eliminar el User" })
        }
        res.status(200).json({ 'UserEliminado': resultado.ok })
    })

});


//ENDPOINT del EJERCICIO

app.get("/photos",
    function (request, response) {

        const id = request.query.id;

        let sendBody = {
            "status": null,
            "mensage": null,
            "data": null
        };

        if (id) {
            Photo.find({ "user": id }).populate('user')
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
            Photo.findOne({}).populate('user')
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



app.post("/photos", (req, res) => {

    const { url, titulo, descripcion, user } = req.body;


    let sendBody = {
        "status": null,
        "mensage": null,
        "data": null
    };


    Photo.create({
        url, titulo, descripcion, user
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


app.delete("/photos", (req, res) => {

    const user = req.query.user;
    const titulo = req.query.titulo;
    const filtrar = Photo.find({ "user": user, "titulo": titulo });
    if (filtrar) {

        Photo.deleteMany({ "user": user, "titulo": titulo },
            function (err) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ "Error": "No se pudo eliminar la Photo" })
                }
                res.status(200).json({ 'Photo': "Photo Eliminada" })
            })
    } else {
        console.log("La Photo no existe");

    }


});

app.delete("/photosAll", (req, res) => {

    const user = req.query.user;


    Photo.deleteMany({ "user": user },
        function (err) {
            if (err) {
                console.log(err);
                return res.status(500).json({ "Error": "No se pudo eliminar la Photo" })
            }
            res.status(200).json({ 'Photo': "Photo Eliminada" })
        })
});


app.put("/follow", (req, res) => {

    const id = req.query.id;
    const update = req.body;

    User.findByIdAndUpdate(id, update, {new:true},(err, userUpdate) => {
        if (err) res.status(500).send({ message: `Error al actualizar el User: ${err}` })
        res.status(200).send({ user: userUpdate })
    })

});

app.put("/unfollow", (req, res) => {

    const id = req.query.id;

    User.findByIdAndUpdate(id, { "follow": null }, {new:true},(err, userUpdate) => {
        if (err) res.status(500).send({ message: `Error al actualizar el User: ${err}` })
        res.status(200).send({ user: userUpdate })
    })

});



app.get("/timeline",
    function (request, response) {

        const id = request.query.id;

        let sendBody = {
            "status": null,
            "mensage": null,
            "data": null
        };

        if (id) {
            User.findOne({ "_id": id }, { nombreUsuario: 1, follow: 1, photo: 1 }).populate('photo').populate('follow')
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
            Photo.findOne({}).populate('follow').populate('photo')
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


app.listen(PORT, HOST, () => {
    console.log(`Api is listen on host ${HOST} and port ${PORT}`);
})