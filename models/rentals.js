const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalsSchema = new Schema ({

    price: {
        type: Number,
        require: true
    },
    rentalDate: {
        type: Date,
        require: true
    },
    returnDate: {
        type: Date,
        require: true,
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    bookId: {
        type: Schema.Types.ObjectId, ref: 'Book',
        required: true
    },
    titleBook: {
        type: String,
        require: true,
    },
});

const Rentals = mongoose.model("Rentals", rentalsSchema);
module.exports = Rentals;