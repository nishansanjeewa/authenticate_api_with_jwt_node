const mongoose = require('mongoose')
const validator = require('validator')
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email')
      }
    }
  },
  password : {
    type: String,
    required: true
  },
  userType: {
    type: Number,
    required: true
  }
});

const User = mongoose.model('User', schema);
module.exports = User;