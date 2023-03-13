const Books = require('../models/books');

const BooksController = {};

BooksController.getAllBooks = async (req, res) => {


    try {
        let result = await Books.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningun libro." })
        }

    } catch (error) {
        console.log(error);
    }
}

BooksController.newBooks = async (req, res) => {

    let title = req.body.title;
    let author = req.body.author;
    let description = req.body.description;
    let year = req.body.year;

    try {
        let result = await Peli.create({
            title: title,
            author: author,
            description: description,
            year: year
        })

        if (result?.title) {
            res.send({ "message": `El libro ${result.title} se ha creado con exito` })
        }

    } catch (error) {
        console.log(error);
    }
};

BooksController.updateBooks = async (req, res) => {

    let _id = req.body._id;
    let newTitle = req.body.title;

    try {

        let result = await Books.findByIdAndUpdate(_id, {
            $set: {
                _id: _id,
                title: newTitle,

            }
        }).setOptions({ returnDocument: 'after' })

        if (result?.name) {
            res.send(result)
        }

    } catch (error) {
        console.log("Error al actualizar el nombre del libro", error);
    }
};

BooksController.deleteBooks = async (req, res) => {
    let _id = req.body._id;

    try {

        let result = await Books.findByIdAndDelete(_id);

        res.send({ "Message": `El libro ${result.title} se ha eliminado con éxito` })

    } catch (error) {
        console.log("Error al eliminar el libro", error);

    }
};

BooksController.id = async (req, res) => {

    let _id = req.body._id;

    try {
        const booksByID = await Books.find({ _id: _id })
        if (booksByID.length == 0) {
            res.send(404);
            res.send({ "message": "No se encontro el libro con ese ID" })
        } else {
            res.send(booksByID)
        }

    } catch (error) {
        console.log(error);
    }
}

BooksController.title = async (req, res) => {

    let title = req.body.title;

    try {
        const foundBooks = await Books.find({
            title: title
        })
        if (foundBooks.length === 0) {
            res.send({ "message": `Lo sentimos, no se ha encontrado ningun libro con este nombre ${title}` });
        } else {
            res.send(foundBooks)
        }
    } catch (error) {
        console.log(error)
    }
};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = BooksController;