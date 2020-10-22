movieconst router = require('express').Router();
let Movie = require('../models/movie.model');

router.route('/').get((req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const theater = req.body.theater;
  const movie = req.body.movie;
  const duration = Number(req.body.duration);
  const released_date = Date.parse(req.body.released_date);

  const newMovie = new Movie({
    theater,
    movie,
    duration,
    released_date,
  });

  newMovie.save()
  .then(() => res.json('Movie added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
