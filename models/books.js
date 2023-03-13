const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const Books = mongoose.model("Books", booksSchema);
module.exports = Books;