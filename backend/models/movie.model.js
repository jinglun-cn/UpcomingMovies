const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  theater: { type: String, required: true },
  movie: { type: String, required: true },
  duration: { type: Number, required: true },
  release_date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
