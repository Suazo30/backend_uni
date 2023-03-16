//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

const RentalsController = require('../Controllers/RentalsControllers');

// Endpoints
router.get("/", auth, isAdmin, RentalsController.getAllRentals);
router.post("/newRental", auth, RentalsController.newRentals);
router.get("/title/", auth, RentalsController.getUserBooks);

//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;