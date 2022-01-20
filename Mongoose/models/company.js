const { Schema, model } = require('mongoose');

const companySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'It is required'],
        maxlength: 30,
        minlength: 2
    },
    registerNumber: {
        type: String,
        required: true,
        unique: true,
        maxlength: 6,
        minlength: 3
    },
    city: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
        minlength: 2
    },
    province: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
        minlength: 2
    },
    creationDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    phoneNumber: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 3
    }
})


module.exports = model("Company", companySchema);