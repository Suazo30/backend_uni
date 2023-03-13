const Rentals = require('../models/rentals');
const RentalsController = require('../models/rentals');

// const jsonwebtoken = require('jsonwebtoken');

// const authConfig = require('../config/auth');

const RentalsController = {};


RentalsController.getAllRentals = async (req, res) => {

    try {

        let result = await Rentals.find({})
            .populate('usersId')
            .populate('booksId');

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún alquiler." })
        }

    } catch (error) {
        console.log(error);
    }
}

RentalsController.newRentals = async (req, res) => {

    try {

        let user = await Rentals.create({
            userId: req.body.user_Id,
            bookId: req.body.book_Id,
            rentalDate: req.body.rentalDate,
            returnDate: req.body.returnDate,
            price: req.body.price,
            titleBooks: req.body.titleBooks,
        })

        if (user) {

            res.send({ "Message": `Hemos alquilado su libro con éxito` });

        }else {

            res.send({ "Message": `Ha habido un error en el alquiler` });

        }

    } catch (error) {
        console.log(error)
    }

};

RentalsController.getUserBooks = async (req, res) => {
    let id = req.params.id

    try {

        let result = await Rentals.find({userId: id})

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún alquiler." })
        }

    } catch (error) {
        console.log(error);
    }
}

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = RentalsController;