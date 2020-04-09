const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    time:{
      type: String,
      trim: true,
      required: true,
    },
    available: {
        type: String,
        trim: true,
        required: true,
    }
});

const Clinic = mongoose.model('Clinic', clinicSchema);
module.exports = Clinic;
