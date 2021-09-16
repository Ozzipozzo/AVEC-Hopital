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
        type: Date,
        default: null
    },
    stop:{
        type: Date,
        default: null
    },
    user: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model('Bed', BedSchema);
