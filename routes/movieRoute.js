const express = require('express')
const AsyncWrap = require('../Utils/AsyncWrap');
const AppError = require('../Utils/AppError');
const authControl = require('../middlewares/authmiddleware')
const flash = require("connect-flash")

const showMovieControl = require('../controller/MovieControllers/showMovies')
const addMovieForm = require('../controller/MovieControllers/newMovieForm')
const addMovieControl = require('../controller/MovieControllers/addMovie')
const showDetailControl = require('../controller/MovieControllers/movieDetail')
const editMovieForm = require('../controller/MovieControllers/movieEditForm')
const editMovieControl = require('../controller/MovieControllers/movieEditControl')
const movieDeleteControl = require('../controller/MovieControllers/movieDelete')

const router = express.Router();

router.use(flash())

router.get("/", AsyncWrap(showMovieControl));
router.get("/new",authControl, (addMovieForm));
router.post("/",authControl, AsyncWrap(addMovieControl));
router.get("/:id", AsyncWrap(showDetailControl));
router.get("/:id/edit",authControl, AsyncWrap(editMovieForm));
router.put("/:id",authControl, AsyncWrap(editMovieControl));
router.delete("/:id", authControl, AsyncWrap(movieDeleteControl))

module.exports = router
