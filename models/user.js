const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

autoIncrement.initialize(connection);

const userSchema = new Schema({
  childName: { type: String, required: true },
  parentName: String,
  taskList: {
    task: {
      taskId: Number,
      name: { type: String, required: true },
      image: { type: String, required: true },
      complete: { type: Boolean, default: false}
    }
  }
});

userSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'userId', startAt: 1});

const User = mongoose.model("User", userSchema);

module.exports = User;