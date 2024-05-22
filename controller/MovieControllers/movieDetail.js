const Movie = require('../../models/movieModel');

const showDetailController = async(req, res)=>{

const { id } = req.params;
console.log(id);
const foundMovie = await Movie.findById(`${id}`);
if (!foundMovie) throw new AppError("No Movies Found", 400);
res.render('movies/show', { foundMovie });
}
module.exports = showDetailController