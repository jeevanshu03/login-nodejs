const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const { register, login } = require('../middleware/validator')

const User = require('../controller/controller');

// const jwt =require('jsonwebtoken')


router.post('/register',register,User.register)

router.post('/login',login,User.login)


module.exports = router;
// register
// (req, res,next) =>{
//   bcrypt.hash(req.body.password,10,(err,hash) =>{
//   if(err)
//   {
//     console.log(err)
//     return res.status(500).json({
//       error:err
      
//     })
//   }else
//   {
//     const user = new User({
//     name: req.body.name,
//     email:req.body.email,
//     phoneNo:req.body.phoneNo,
//     address: req.body.address,
//     password: hash,
//     })

//     user.save()
//     .then(result=>{
//       console.log("user saved")
//       res.status(200).json({
//         new_user:result
//       })
//     })
//     .catch(err=>{
//       console.log(err)
//       res.status(500).json({
//         error:err
//       })
//     })
//   }
//   })
// }





// login
// (req, res,next) =>{
//   User.find({email:req.body.email})
//   .exec()
//   .then(user=>{
//     if(user<1){
//       console.log("user does not exist")
//        return res.status(401).json({
//          msg:'user not exist'
//        })
//     }else{
//       bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
//         if(!result){
//           console.log("password does not match")
//             return res.status(401).json({
//               msg:'Incorrect password'
//             })
//         }
//         if(result){
//           console.log("user found")
//            const token = jwt.sign({
//              name:user[0].name,
//              phoneNo:user[0].phoneNo,
//              address:user[0].address,
//              email:user[0].email
//            },
//            'this is jwt',
//            {
//              expiresIn:"24hr"
//            }
//            );
//            res.status(200).json({
//              name:user[0].name,
//              phoneNo:user[0].phoneNo,
//              address:user[0].address,
//              email:user[0].email,
//              token:token
//            })
//         }
//       })
//     }
//   })
//   .catch(err=>{
//     res.status(500).json({
//       error:err
//     })
//   })
// } 