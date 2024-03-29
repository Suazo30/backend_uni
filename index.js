//Importo clase express
const express=require('express');
//Importo métodos de express
const app=express();
const cors = require('cors');

const dbconnect = require("./db/dbconnect.js");

const PORT = 5506;

//Importo fichero ./router
const router = require('./router');

//Middlewares
//Para poder usar json

//Configuro cors
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

//Me conecto a la base de datos
dbconnect();


//levanto la API
app.listen(PORT, () => console.log(`Node server running on http://localhost:${PORT}` ))