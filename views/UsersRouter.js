//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

const UsersController = require('../Controllers/UsersControllers');

//Endpoints

router.get("/",auth, isAdmin, UsersController.getAllUser);
router.post("/newusers", UsersController.newUser);
router.put("/update", UsersController.updateUser);
router.delete("/delete", UsersController.deleteUser);
router.post("/login", UsersController.loginUser);


//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;