const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', TaskSchema);

