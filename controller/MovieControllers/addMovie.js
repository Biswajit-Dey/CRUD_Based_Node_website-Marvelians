const Movie = require('../../models/movieModel');

const addMovieController = async(req, res)=>{
    const newMovie = new Movie(req.body);
    await newMovie.save()
    req.flash("success", "New Movie added")
    res.redirect('/movies');
}

module.exports = addMovieController