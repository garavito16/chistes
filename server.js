const express = require('express');
require('./config/mongoose.config');

const app = express();
const JokeRouter = require('./rutas/jokes.routes');

app.use(express.json());
app.use('/api/jokes',JokeRouter);

app.listen(8080,()=>{
    console.log("el servidor se ejecuta en el puerto 8080");
});