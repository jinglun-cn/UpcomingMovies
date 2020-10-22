const router = require('express').Router();
let Theater = require('../models/theater.model');

router.route('/').get((req, res) => {
  Theater.find()
    .then(theaters => res.json(theaters))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const theater = req.body.theater;

  const newTheater = new Theater({theater});

  newTheater.save()
    .then(() => res.json('Theater added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
