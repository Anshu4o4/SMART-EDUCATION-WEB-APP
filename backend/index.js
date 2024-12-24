const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 5002;  // Change to 5001 or another unused port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

