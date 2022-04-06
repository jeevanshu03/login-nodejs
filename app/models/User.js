const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    }
    
});
UserSchema.pre('create',async(next) =>{
    try{
     const salt =await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(this.password,salt)
     this.password = hashedPassword
     next()
    }catch(error){
        next(error)
    }
})
const User = mongoose.model('user', UserSchema);

module.exports = User;