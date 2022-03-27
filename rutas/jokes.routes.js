const express = require('express');
const JokeRouter = express.Router();
const controladorJoke = require('./../controladores/jokes.controller');


JokeRouter.get('/random',controladorJoke.getJokeRandom);
JokeRouter.post('/new',controladorJoke.insertarJoke);
JokeRouter.get('',controladorJoke.getAllJokes);
JokeRouter.get('/:id',controladorJoke.getJokeXid);
JokeRouter.put('/update/:id',controladorJoke.updateJoke);
JokeRouter.delete('/delete/:id',controladorJoke.deleteJoke);


module.exports = JokeRouter;