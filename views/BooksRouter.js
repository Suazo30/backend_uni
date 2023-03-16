//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware...
// const auth = require('../middlewares/auth');
// const isAdmin = require('../middlewares/isAdmin');

const BooksController = require('../Controllers/BooksControllers');

//Endpoints

router.get("/", BooksController.getAllBooks);
router.post("/", BooksController.newBooks);
router.put("/update", BooksController.updateBooks);
router.delete("/delete", BooksController.deleteBooks);
// router.post("/year", BooksController.year);
router.post("/id", BooksController.id);
router.post("/title", BooksController.title);
// router.post("/description", BooksController.description);
// router.post("/author", BooksController.author);

//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;