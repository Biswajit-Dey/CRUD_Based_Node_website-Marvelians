const Movie = require('../../models/movieModel');

const showMovieController = async (req, res)=>{
const name = req.query.title;
  if (name) {
    const movies = await Movie.find({ title: new RegExp(name) });
    res.render('movies/index', { movies });
  } else {
    const movies = await Movie.find({});
    res.render('movies/index', { movies });
  }
}

module.exports = showMovieController