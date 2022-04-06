const userModel = require("../models/User");
const Joi =require("joi")

const bcrypt = require("bcrypt");

const mongoose = require('mongoose')

class Users {
  constructor() {
    return {
      register: this.register.bind(this),
      login: this.login.bind(this),
      
    };
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns  store users Data
   */
   async register(req, res, next) {
    const validationSchema = {
      username: Joi.string().required().trim(),
      email: Joi.string().required().trim(),
      mobile: Joi.string().min(7).max(14).required().trim(),
      password: Joi.string().required().trim(),
      type:Joi.string().required().trim()
    }
    try {
      let userdata = Joi.validate(req.body, validationSchema)
      const resultData = await userModel.create(userData);
     

      return res.status(201).json({
        message: "User Registered",
        result: resultData,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ 
          message: "Something went wrong", 
          result: err 
        });
    }
  }


  async login(req, res, next) {
    const validationSchema = {
      username: Joi.string().required().trim(),
      password: Joi.string().required().trim(),
    }
    try {
      let {username} = Joi.validate(req.body, validationSchema)
      const checkValid = await userModel.findOne({ username: username });
      if(!checkValid){
        return res
        .status(500)
        .json({ success: false, message: "invalid password" });
      }
      const comparePassword = await bcrypt.compare(
        password,
        checkValid.password
      );
      if (!comparePassword) {
        return res
          .status(500)
          .json({ success: false, message: "invalid password" });
      }
      return res.status(200).json({
        success: true,
        message: "login successfully"      
      });
    } catch (err) {
      return res
        .status(500)
        .json({ success: false, message: "something went wrong", result: err });
        console.log(err)
    }
  }
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * @returns user listing
   */

  

}
module.exports = new Users();