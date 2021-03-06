const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/starfishDB");

autoIncrement.initialize(connection);

const taskSchema = new Schema({
    taskId: Number,
    name: { type: String, required: true },
    image: { type: String, required: true },
    complete: { type: Boolean, default: false},
    checked: { type: Boolean, default: false}
});

taskSchema.plugin(autoIncrement.plugin, { model: 'Task', field: 'taskId', startAt: 13});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;