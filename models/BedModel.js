const mongoose = require('mongoose');

const BedSchema = new mongoose.Schema({
    bed: {
        type: Number,
        unique: true,
        require: true
    },
    floor: {
        type: Number,
        require: true,
        unique: true
    },
    available: {
        type: Boolean
    },
    start: {
        type: Date
    },
    stop:{
        type: Date
    }
})

module.exports = mongoose.model('Bed', BedSchema);
