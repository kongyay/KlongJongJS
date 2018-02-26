// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var wordSchema = new Schema({
  name: { type: String, required: true, unique: true },
  group: { type: String, required: true},
  count: { type: Number, required: true },
  
  groupSep: Array,
  tag: Array,
  created_at: Date,
});

// the schema is useless so far
// we need to create a model using it
var Word = mongoose.model('Word', wordSchema);

// make this available to our users in our Node applications
module.exports = Word;