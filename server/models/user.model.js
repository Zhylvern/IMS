const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    _id: { type: mongoose.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    username: {type: String, required: true},
    password: {type: String, required: true}
  },
  {
    versionKey: false,
  }
);

const user = mongoose.model('users', userSchema);
module.exports = user;