var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
  userId: {type: String, required: true},
  hair: {type: String, required: true},
  face: {type: String, required: true},
  skin: {type: String, required: true},
  eyes: {type: String, required: true},
  nose: {type: String, required: true},
  mouth: {type: String, required: true},
  shirt: {type: String, required: true},
  pants: {type: String, required: true},
  shoes: {type: String, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Avatar', schema);
