const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_chistes',{useNewUrlParser:true})
    .then(()=>{
        console.log("conectado a la base de datos");
    })
    .catch(err=>{
        console.log("hubo un error al conectarse a la base de datos");
    })

mongoose.connection.on('error',(err)=>{
    console.log("Mongoose error : "+err);
    process.exit(0);
});

mongoose.connection.on('disconnected',()=>{
    console.log("base de datos desconectada");
});