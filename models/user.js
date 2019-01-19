const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userInfo: {
    id: { type: Number, required: true },
    childName: { type: String, required: true },
    parentName: String
  },
  taskList: {
    task: {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      image: { type: String, required: true },
      complete: { type: Boolean, default: false}
    }
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;