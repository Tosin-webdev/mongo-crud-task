const mongoose = require('mongoose');

let taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = new mongoose.model('Task', taskSchema);
module.exports = Task;
