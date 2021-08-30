
// ENDPOINT THE PROFESSIONALES
async function getProfessional() {
    var id = document.getElementById("id").value;

    // let url = id != null || id != undefined || id != 0 ? `http://localhost:3000/professionales?id=` + id : `http://localhost:3000/professionales`;
    console.log(id);

    if (id == null || id == undefined || id == 0) {
        url = `http://localhost:3000/professionales`

    } else if (id != null || id != undefined || id != 0) {
        url = `http://localhost:3000/professionales?id=` + id;

    }

    let params = {
        header: { "Content-type": "application/json; charset= UTF-8" },
        method: "GET"
    };

    try {

        let data = await fetch(url, params);
        let result = await data.json();
        console.log(JSON.stringify(result));
        let datas = result.data;
        let main = document.getElementById("main");

        if (id) {
            document.getElementById("nombre").innerHTML = "Nombre " + result.data.name;
            document.getElementById("edad").innerHTML = "Edad " + result.data.age;
            document.getElementById("genero").innerHTML = "Genero " + result.data.genre;
            document.getElementById("peso").innerHTML = "Peso " + result.data.weight;
            document.getElementById("altura").innerHTML = "Height " + result.data.height;
            document.getElementById("colorPelo").innerHTML = "HairColor " + result.data.hairColor;
            document.getElementById("colorOjos").innerHTML = "EyeColor " + result.data.eyeColor;
            document.getElementById("raza").innerHTML = "Race " + result.data.race;
            document.getElementById("EstaRetired").innerHTML = "isRetired " + result.data.isRetired;
            document.getElementById("nacionalidad").innerHTML = "Nationality " + result.data.nationality;
            document.getElementById("numeroOscars").innerHTML = "OscarNumbers " + result.data.oscarNumbers;
            document.getElementById("profesion").innerHTML = "Profession " + result.data.profession;


        } else {

            for (let key in datas) {

                let tabla = document.getElementById("datos");

                let name = document.createElement("p");
                name.innerHTML = "Nombre " + datas[key].name;

                let age = document.createElement("p");
                age.innerHTML = "Edad " + datas[key].age;

                let genre = document.createElement("p");
                genre.innerHTML = "Genero " + datas[key].genre;

                let weight = document.createElement("p");
                weight.innerHTML = "Peso " + datas[key].weight;

                let height = document.createElement("p");
                height.innerHTML = "Altura " + datas[key].height;

                let hairColor = document.createElement("p");
                hairColor.innerHTML = "Color de pelo " + datas[key].hairColor;

                let eyeColor = document.createElement("p");
                eyeColor.innerHTML = "Color de Ojos " + datas[key].eyeColor;

                let race = document.createElement("p");
                race.innerHTML = "Raza " + datas[key].race;

                let isRetired = document.createElement("p");
                isRetired.innerHTML = "Esta Retirado " + datas[key].isRetired;

                let nationality = document.createElement("p");
                nationality.innerHTML = "Nacionalidad " + datas[key].nationality;

                let oscarNumbers = document.createElement("p");
                oscarNumbers.innerHTML = "Numeros de Oscars " + datas[key].oscarNumbers;

                let profession = document.createElement("p");
                profession.innerHTML = "Profesion " + datas[key].profession;

                tabla.appendChild(name);
                tabla.appendChild(age);
                tabla.appendChild(genre);
                tabla.appendChild(weight);
                tabla.appendChild(height);
                tabla.appendChild(hairColor);
                tabla.appendChild(race);
                tabla.appendChild(isRetired);
                tabla.appendChild(nationality);
                tabla.appendChild(oscarNumbers);
                tabla.appendChild(profession);

                main.appendChild(tabla);
                console.log(main);

            }
        }

    } catch (e) {
        console.log(e);
    }

}

// ENDPOINT THE PROFESSIONALES
async function postProfessionales() {


    try {

        let professionales = {
            "name": document.getElementById("name").value,
            "age": document.getElementById("age").value,
            "genre": document.getElementById("genre").value,
            "weight": document.getElementById("weight").value,
            "height": document.getElementById("height").value,
            "hairColor": document.getElementById("hairColor").value,
            "eyeColor": document.getElementById("eyeColor").value,
            "race": document.getElementById("race").value,
            "isRetired": document.getElementById("isRetired").value,
            "nacionality": document.getElementById("nationality").value,
            "oscarNumbers": document.getElementById("oscarNumbers").value,
            "profession": document.getElementById("profession").value

        };

        let url = "http://localhost:3000/professionales";

        let params = {
            headers: { "Content-type": "application/json; charset= UTF-8" },
            body: JSON.stringify(professionales),
            method: "POST"
        }
        console.log(params.body);

        let data = await fetch(url, params);
        let result = await data.json();

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// ENDPOINT THE PROFESSIONALES
async function putProfessionales() {
    var id = document.getElementById("id").value;

    try {

        let nameProfessional = document.getElementById("name").value == null ||
            document.getElementById("name").value == "" ? undefined : document.getElementById("name").value;

        let ageProfessional = document.getElementById("age").value == null ||
            document.getElementById("age").value == "" ? undefined : document.getElementById("age").value;

        let genreProfessional = document.getElementById("genre").value == null ||
            document.getElementById("genre").value == "" ? undefined : document.getElementById("genre").value;

        let weightProfessional = document.getElementById("weight").value == null ||
            document.getElementById("weight").value == "" ? undefined : document.getElementById("weight").value;

        let heightProfessional = document.getElementById("height").value == null ||
            document.getElementById("height").value == "" ? undefined : document.getElementById("height").value;

        let hairColorProfessional = document.getElementById("hairColor").value == null ||
            document.getElementById("hairColor").value == "" ? undefined : document.getElementById("hairColor").value;

        let eyeColorProfessional = document.getElementById("eyeColor").value == null ||
            document.getElementById("eyeColor").value == "" ? undefined : document.getElementById("eyeColor").value;

        let raceProfessional = document.getElementById("race").value == null ||
            document.getElementById("race").value == "" ? undefined : document.getElementById("race").value;

        let isRetiredProfessional = document.getElementById("isRetired").value == null ||
            document.getElementById("isRetired").value == "" ? undefined : document.getElementById("isRetired").value;

        let nacionalityProfessional = document.getElementById("nationality").value == null ||
            document.getElementById("nationality").value == "" ? undefined : document.getElementById("nationality").value;

        let oscarNumbersProfessional = document.getElementById("oscarNumbers").value == null ||
            document.getElementById("oscarNumbers").value == "" ? undefined : document.getElementById("oscarNumbers").value;

        let professionNumbersProfessional = document.getElementById("profession").value == null ||
            document.getElementById("profession").value == "" ? undefined : document.getElementById("profession").value;


        let professionales = {
            "name": nameProfessional,
            "age": ageProfessional,
            "genre": genreProfessional,
            "weight": weightProfessional,
            "height": heightProfessional,
            "hairColor": hairColorProfessional,
            "eyeColor": eyeColorProfessional,
            "race": raceProfessional,
            "isRetired": isRetiredProfessional,
            "nationality": nacionalityProfessional,
            "oscarNumbers": oscarNumbersProfessional,
            "profession": professionNumbersProfessional
        };

        let url = `http://localhost:3000/professionales?id=` + id;
        let params = {
            headers: { "Content-type": "application/json; charset= UTF-8" },
            body: JSON.stringify(professionales),
            method: "PUT"
        }
        console.log(params.body);

        let data = await fetch(url, params);
        let result = await data.json();

        console.log(result);
    } catch (error) {
        console.log(error);
    }

}

// ENDPOINT THE PROFESSIONALES
async function deleteProfessionales() {
    var id = document.getElementById("id").value;

    try {

        let url = `http://localhost:3000/professionales?id=` + id;

        let params = {
            headers: { "Content-type": "application/json; charset= UTF-8" },
            method: "DELETE"
        }
        console.log(params);

        let data = await fetch(url, params);
        let result = await data.json();

        console.log(result);
    } catch (error) {
        console.log(error);
    }

}

// ENDPOINT THE MOVIES
async function getMovies() {
    var id = document.getElementById("id").value;

    let url;
    console.log(id);
    
    if (id == null || id == undefined || id == 0) {
        url = `http://localhost:3000/peliculas`

    } else if (id != null || id != undefined || id != 0) {
        url = `http://localhost:3000/peliculas?id=` + id;

    }

    let params = {
        header: { "Content-type": "application/json; charset= UTF-8" },
        method: "GET"
    };

    try {


        let data = await fetch(url, params);
        let result = await data.json();
        console.log(JSON.stringify(result));
        let datas = result.data;
        let main = document.getElementById("main");


        if (id) {
            document.getElementById("titulo").innerHTML = "Titulo " + result.data.title;
            document.getElementById("ayoNacimiento").innerHTML = "Año de Nacimiento " + result.data.releaseYear;
            document.getElementById("actors").innerHTML = "Actors " + result.data.actors;
            document.getElementById("nacionalidad").innerHTML = "Nacionalidad " + result.data.nacionality;
            document.getElementById("director").innerHTML = "Director " + result.data.director;
            document.getElementById("guionista").innerHTML = "Guionista " + result.data.writer;
            document.getElementById("idioma").innerHTML = "Idioma " + result.data.language;
            document.getElementById("plataforma").innerHTML = "Plataform " + result.data.plataform;
            document.getElementById("EstaMCU").innerHTML = "Esta en el MCU " + result.data.isMCU;
            document.getElementById("personajePrincipal").innerHTML = "Nombre Personaje Principal " + result.data.mainCharacterName;
            document.getElementById("productor").innerHTML = "Productor " + result.data.producer;
            document.getElementById("distribuidor").innerHTML = "Distribuidor " + result.data.distributor;
            document.getElementById("genero").innerHTML = "Genero " + result.data.genre;
        } else {

            for (let key in datas) {



                let tabla = document.getElementById("datos");
                
                let title = document.createElement("p");
                title.innerHTML = "Titulo " + datas[key].title;

                let releaseYear = document.createElement("p");
                releaseYear.innerHTML = "Año de Nacimiento " + datas[key].releaseYear;

                let actors = document.createElement("p");
                actors.innerHTML = "Actors " + datas[key].actors;

                let nacionality = document.createElement("p");
                nacionality.innerHTML = "Nacionalidad " + datas[key].nacionality;

                let director = document.createElement("p");
                director.innerHTML = "Director " + datas[key].director;

                let writer = document.createElement("p");
                writer.innerHTML = "Guionista " + datas[key].writer;

                let language = document.createElement("p");
                language.innerHTML = "Idioma " + datas[key].language;

                let plataform = document.createElement("p");
                plataform.innerHTML = "Plataforma " + datas[key].plataform;

                let isMCU = document.createElement("p");
                isMCU.innerHTML = "Esta en el MCU " + datas[key].isMCU;

                let mainCharacterName = document.createElement("p");
                mainCharacterName.innerHTML = "Nombre Personaje Principal " + datas[key].mainCharacterName;

                let producer = document.createElement("p");
                producer.innerHTML = "Productor " + datas[key].producer;

                let distributor = document.createElement("p");
                distributor.innerHTML = "Distribuidor " + datas[key].distributor;

                let genre = document.createElement("p");
                genre.innerHTML = "Genero " + datas[key].genre;


                tabla.appendChild(title);
                tabla.appendChild(releaseYear);
                tabla.appendChild(actors);
                tabla.appendChild(nacionality);
                tabla.appendChild(director);
                tabla.appendChild(writer);
                tabla.appendChild(language);
                tabla.appendChild(plataform);
                tabla.appendChild(isMCU);
                tabla.appendChild(mainCharacterName);
                tabla.appendChild(producer);
                tabla.appendChild(distributor);
                tabla.appendChild(genre);

                main.appendChild(tabla);
            }
        }
    } catch (e) {
        console.log(e);
    }

}


// ENDPOINT THE MOVIES
async function postMovies() {

    try {

        let movies = {
            "title": document.getElementById("title").value,
            "releaseYear": document.getElementById("releaseYear").value,
            "actors": document.getElementById("actors").value,
            "nacionality": document.getElementById("nacionality").value,
            "director": document.getElementById("director").value,
            "writer": document.getElementById("writer").value,
            "language": document.getElementById("language").value,
            "plataform": document.getElementById("plataform").value,
            "isMCU": document.getElementById("isMCU").value,
            "mainCharacterName": document.getElementById("mainCharacterName").value,
            "producer": document.getElementById("producer").value,
            "distributor": document.getElementById("distributor").value,
            "genre": document.getElementById("genre").value

        };

        let url = "http://localhost:3000/peliculas";

        let params = {
            headers: { "Content-type": "application/json; charset= UTF-8" },
            body: JSON.stringify(movies),
            method: "POST"
        }
        console.log(params.body);

        let data = await fetch(url, params);
        let result = await data.json();

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}


// ENDPOINT THE PROFESSIONALES
async function putMovies() {
    var id = document.getElementById("id").value;

    try {


        let titleMovies = document.getElementById("title").value == null ||
            document.getElementById("title").value == "" ? undefined : document.getElementById("title").value;

        let releaseYearMovies = document.getElementById("releaseYear").value == null ||
            document.getElementById("releaseYear").value == "" ? undefined : document.getElementById("releaseYear").value;

        let actorsMovies = document.getElementById("actors").value == null ||
            document.getElementById("actors").value == "" ? undefined : document.getElementById("actors").value;

        let nacionalityMovies = document.getElementById("nacionality").value == null ||
            document.getElementById("nacionality").value == "" ? undefined : document.getElementById("nacionality").value;

        let directorMovies = document.getElementById("director").value == null ||
            document.getElementById("director").value == "" ? undefined : document.getElementById("director").value;

        let writerMovies = document.getElementById("writer").value == null ||
            document.getElementById("writer").value == "" ? undefined : document.getElementById("writer").value;

        let languageMovies = document.getElementById("language").value == null ||
            document.getElementById("language").value == "" ? undefined : document.getElementById("language").value;

        let plataformMovies = document.getElementById("plataform").value == null ||
            document.getElementById("plataform").value == "" ? undefined : document.getElementById("plataform").value;

        let isMCUMovies = document.getElementById("isMCU").value == null ||
            document.getElementById("isMCU").value == "" ? undefined : document.getElementById("isMCU").value;

        let mainCharacterNameMovies = document.getElementById("mainCharacterName").value == null ||
            document.getElementById("mainCharacterName").value == "" ? undefined : document.getElementById("mainCharacterName").value;

        let producerMovies = document.getElementById("producer").value == null ||
            document.getElementById("producer").value == "" ? undefined : document.getElementById("producer").value;

        let distributorMovies = document.getElementById("distributor").value == null ||
            document.getElementById("distributor").value == "" ? undefined : document.getElementById("distributor").value;

        let genreMovies = document.getElementById("genre").value == null ||
            document.getElementById("genre").value == "" ? undefined : document.getElementById("genre").value;

        let movies = {
            "title": titleMovies,
            "releaseYear": releaseYearMovies,
            "actors": actorsMovies,
            "nacionality": nacionalityMovies,
            "director": directorMovies,
            "writer": writerMovies,
            "language": languageMovies,
            "plataform": plataformMovies,
            "isMCU": isMCUMovies,
            "mainCharacterName": mainCharacterNameMovies,
            "producer": producerMovies,
            "distributor": distributorMovies,
            "genre": genreMovies
        };


        let url = `http://localhost:3000/peliculas?id=` + id;
        let params = {
            headers: { "Content-type": "application/json; charset= UTF-8" },
            body: JSON.stringify(movies),
            method: "PUT"
        }
        console.log(JSON.stringify(params.body));

        let data = await fetch(url, params);
        let result = await data.json();

        console.log(result);
    } catch (error) {
        // console.log(error);
    }

}

// ENDPOINT THE MOVIES
async function deleteMovies() {
    var id = document.getElementById("id").value;

    try {

        let url = `http://localhost:3000/peliculas?id=` + id;

        let params = {
            headers: { "Content-type": "application/json; charset= UTF-8" },
            method: "DELETE"
        }
        console.log(params);

        let data = await fetch(url, params);
        let result = await data.json();

        console.log(result);
    } catch (error) {
        console.log(error);
    }

}
