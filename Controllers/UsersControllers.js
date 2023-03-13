const Users = require('../models/users');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const authConfig = require('../config/auth');
const { response } = require('express');

const UsersController = {};

UsersController.getAllUsers = async (req, res) => {

    try {

        let result = await Users.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún usuario." })
        }

    } catch (error) {
        console.log(error);
    }
}

UsersController.newUser = async (req, res) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));

    try {

        let user = await Users.create({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: password,
            phone: req.body.phone,
            dni: req.body.dni,
            role: req.body.role
        })

        if (user) {
            res.send({ "Message": `El usuario ${user.name} se ha añadido con éxito` })
        }

    } catch (error) {
        console.log(error)
    }

};

UsersController.updateUser = async (req, res) => {

    let _id = req.body._id;
    let newName = req.body.name;

    try {

        let result = await Users.findByIdAndUpdate(_id, {
            $set: {
                _id: _id,
                name: newName,

            }
        }).setOptions({ returnDocument: 'after' })

        if (result?.name) {
            res.send(result)
        }

    } catch (error) {
        console.log("Error al actualizar el nombre del usuario", error);
    }
};

UsersController.deleteUser = async (req, res) => {
    let _id = req.body._id;

    try {

        let result = await Users.findByIdAndDelete(_id);

        res.send({ "Message": `El usuario ${result.name} se ha eliminado con éxito` })

    } catch (error) {
        console.log("Error al eliminar el usuario", error);

    }
};

UsersController.loginUser = async (req, res) => {

    try {

        let userFound = await Users.find({
            email: req.body.email
           
        })

        
        if (userFound) {
            
            if (userFound[0].email === undefined) {
                //No hemos encontrado al usuario...mandamos un mensaje
                res.send("Usuario o password incorrecto");
            } else {
               
                //Hemos encontrado al usuario, vamos a ver si el pass es correcto
               
                if (bcrypt.compareSync(req.body.password, userFound[0].password)) {
                    
                    let token = jsonwebtoken.sign({ usuario: userFound }, authConfig.SECRET, {
                        expiresIn: authConfig.EXPIRES
                    });

                    let loginOk = `Bienvenido de nuevo ${userFound[0].name}`;
                    res.json({
                        loginOk,
                        //user: userFound,
                        token: token
                    })

                } else {
              
                    res.send("Usuario o password incorrecto");
                }
            }

        }


    } catch (error) {
        res.send("Email o password incorrectos");
    }
}

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = UsersController;