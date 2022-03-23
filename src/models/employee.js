const mongoose = require('mongoose');
const validator = require('validator');
const employeeSchema = new mongoose.Schema({
    //schemaa

    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "email is alredy exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email")
            }
        }
    },
    cno: {
        type: Number,
        required: true,
        trim: true,

    },
    salary: {
        type: Number,
        required: true,
        trim: true,

    }
});


// create new collection 
const employeeUser = new mongoose.model("EmployeeUser", employeeSchema);
module.exports = employeeUser;