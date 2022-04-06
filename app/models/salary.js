const mongoose = require("mongoose");


const salarySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    ctc: {
        type: Number,
        required: true,
    },
    inHand:{
        type:Number,
        required:true,
    },
    currentlyWorking: {
        type:Boolean,
        default:true

    },
    deduction: {
        type:Number,
        required:true
    },
    empName: {
        type: String,
        required: true
    },
    
});

const salary = mongoose.model('salary', salarySchema);

module.exports = salary;