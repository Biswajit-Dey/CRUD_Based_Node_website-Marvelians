const Movie = require('../../models/movieModel')

const movieEditControl = async(req, res)=>{
    const { id } = req.params;
    await Movie.findByIdAndUpdate(id, req.body);
    res.redirect(`/movies/${id}`);
}

module.exports = movieEditControl