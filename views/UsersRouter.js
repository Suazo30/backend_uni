//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
// const auth = require('../middlewares/auth');
// const isAdmin = require('../middlewares/isAdmin');

const UsersController = require('../controllers/UsersController');

//Endpoints

router.get("/",auth, isAdmin, UsersController.getAllUsers);
router.post("/newusers", UsersController.newUsers);
router.put("/update", UsersController.updateUsers);
router.delete("/delete", UsersController.deleteUsers);
router.post("/login", UsersController.loginUsers);


//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;