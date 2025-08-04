const mongoose = require('mongoose');
const { Schema } = mongoose; // this is a destructured version of const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    body: String,
    rating: Number
})

module.exports = mongoose.model('Review', reviewSchema);
