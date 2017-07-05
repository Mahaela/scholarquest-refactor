var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
  email: {type: String, required: true, unique: true},
  password:{type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  coins: {type: Number, required: true},
  cursor: {type: Number, required: true},
  cursorFollower: {type: Number, required: true},
  valiatedEmail: {type: Boolean, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Student', schema);
