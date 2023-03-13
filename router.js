
//Importo método router() de la clase express
const router = require('express').Router();

const BooksRouter = require('./views/BooksRouter');
const RentalsRouter = require('./views/RentalsRouter');
const UsersRouter = require('./views/UsersRouter');


router.use("/books", BooksRouter);
router.use("/users", UsersRouter);
router.use("/rentals", RentalsRouter);



//Exporto router
module.exports = router;