const Movie = require('../../models/movieModel');

const showEditForm = async (req, res)=>{
const { id } = req.params;
const movie = await Movie.findById(`${id}`);
if (!movie) throw new AppError("Invalid Request", 400);
res.render('movies/edit', { movie });
}

module.exports = showEditForm