const router = require('express').Router();
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
  const release_date = Date.parse(req.body.release_date);

  const newMovie = new Movie({
    theater,
    movie,
    duration,
    release_date,
  });

  newMovie.save()
  .then(() => res.json('Movie added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  Movie.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.json('Movie deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Movie.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);
      exercise.save()
        .then(() => res.json('Movie updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
