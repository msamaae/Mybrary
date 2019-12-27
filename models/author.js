// Require mongoose module 
const mongoose = require('mongoose');

// Create schema 
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// Export schema 
module.exports = mongoose.model('Author', authorSchema);