const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const theaterSchema = new Schema({
  theater: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Theater = mongoose.model('Theater', theaterSchema);

module.exports = Theater;
