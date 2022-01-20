const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'It is required'],
        maxlength: 30,
        minlength: 2
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'It is required'],
        maxlength: 30,
        minlength: 2
    },
    nationalCode: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 30,
        minlength: 2
    },
    sex: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'male'
    },
    isManager: {
        type: Boolean,
        required: true
    },
    birthDate: {
        type: Date,
        required: true,
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        required: true
    }
})


module.exports = model("Employee", employeeSchema);