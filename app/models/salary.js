const mongoose = require("mongoose");


const salarySchema = new mongoose.Schema({
    empId: {
        type: String,
        required: true
    },
    ctc: {
        type: Number,
        required: true,
        unique:true
    },
    inHand:{
        type:Number,
        required:true,
        unique:true
    },
    currentlyWorking: {
        type:Boolean,
        required:true,

    },
    empName: {
        type: String,
        required: true
    },
    
});

const salary = mongoose.model('salary', salarySchema);

module.exports = address;