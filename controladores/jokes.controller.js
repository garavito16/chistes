
const Joke = require('./../modelos/jokes.model');

const insertarJoke = (request,response) => {
    const {setup,puchline} = request.body;

    const nuevoJoke  = {
        setup,puchline
    };
    Joke.create(nuevoJoke)
        .then(datoNuevo=>{
            return response.status(200).json(datoNuevo);
        })
        .catch(err=>{
            console.log("Ocurrio un error al intentar crear el joke. "+err);
            //return response.status(400).end();
            response.json({ message: "Something went wrong", error: err })
        });
}

const getAllJokes = (request,response) => {
    Joke.find()
        .then(listaJokes=>{
            return response.status(200).json(listaJokes);
        })
        .catch(err=>{
            response.statusMessage = "Error al consultar la BD. "+err;
            return response.status(400).end();
        })
}

const getJokeRandom = (request,response) => {
    Joke.find()
        .then(listaJokes=>{
            console.log(listaJokes.length);
            //seleccionar un joke random
            const random = Math.floor(Math.random()*listaJokes.length);
            return response.json({joke:listaJokes[random]});
        })
        .catch(err=>{
            response.statusMessage = "Error al consultar la BD. "+err;
            return response.status(400).end();
        })
}


const getJokeXid = (request,response) => {
    Joke.findOne({_id:request.params.id})
        .then(oneJoke => {
            response.json({joke:oneJoke});
        })
        .catch(err=>{
            response.statusMessage = "Error al consultar la BD. "+err;
            return response.status(400).end();
        })
}

const updateJoke = (request,response) => {
    Joke.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
        .then(actualizaJoke => {
            return response.json({user:actualizaJoke});
        })
        .catch(err=>{
            response.statusMessage = "error al actualizar el joke. "+err;
            response.status(400).end();
        });
}

const deleteJoke = (request,response) => {
    Joke.deleteOne({_id:request.params.id})
        .then(result=>{
            response.status(204).json({resul:result});
        })
        .catch(err=>{
            response.statusMessage = "error al eliminar el joke. "+err;
            response.status(400).end();
        });
}

const ControladorJoke = {
    insertarJoke,
    getAllJokes,
    getJokeXid,
    getJokeRandom,
    updateJoke,
    deleteJoke
}

module.exports = ControladorJoke;