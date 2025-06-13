const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const tasksRoutes = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(express.json());

// Use the routes
app.use('/api/tasks', tasksRoutes);

// MongoDB connection (optional: update URI as needed)
mongoose.connect('mongodb://localhost:27017/taskmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

