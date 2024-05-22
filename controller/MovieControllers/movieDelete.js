const Movie = require('../../models/movieModel');

const deleteMovieControl = async (req, res)=>{
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.redirect('/movies');
}

module.exports = deleteMovieControl