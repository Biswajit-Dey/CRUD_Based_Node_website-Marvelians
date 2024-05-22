const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    img : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    year: {
        type : Number,
        required : true
    },
    hero : {
        type : String,
        required : true
    },
    villain : {
        type : String,
        required : true
    },
    imdb : {
        type : Number,
        required : true
    },
    budget : {
        type : String,
        required : true
    },
    earning : {
        type : String,
        required : true
    },
    director : {
        type : String,
        required : true
    },
    producer : {
        type : String,
        required : true
    }
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;