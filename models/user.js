const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  childName: { type: String, required: true },
  parentName: String,
  tasks: [
    {
      taskId: Number,
      name: { type: String, required: true },
      image: { type: String, required: true },
      complete: { type: Boolean, default: false},
      checked: { type: Boolean, default: false}
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;