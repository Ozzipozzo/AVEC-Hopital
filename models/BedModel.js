const mongoose = require('mongoose');

const BedSchema = new mongoose.Schema({
    bed: {
        type: Number,
        require: true
    },
    floor: {
        type: Number,
        require: true,
    },
    available: {
        type: Boolean
    },
    start: {
        type: Date
    },
    stop:{
        type: Date
    },
    userId: {
        type: String
    }
})

module.exports = mongoose.model('Bed', BedSchema);
