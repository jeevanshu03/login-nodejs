const mongoose = require("mongoose");


const addressSchema = new mongoose.Schema({
    empId: {
        type: String,
        required: true
    },
    homeAdd: {
        type: String,
        required: true,
        
    },
    officeAdd:{
        type:String,
        required:true,
        
    },
    empName: {
        type:String,
        required:true,

    },
    empNo: {
        type: Number,
        required: true
    },
    
});

const address = mongoose.model('address', addressSchema);

module.exports = address;