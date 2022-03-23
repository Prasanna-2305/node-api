const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/employee-api", {
    useNewUrlParser: true,
}).then(() => {
    console.log("Connection established");
}).catch(() => {
    console.log("connection failure");
})