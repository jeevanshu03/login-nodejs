const userModel = require("../models/User");

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
    try {
      let bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
      const userData = {
        name: bodyData.name,
        email: bodyData.email,
        phoneNo: bodyData.phoneNo,
        address:bodyData.address,
        password: bodyData.password
        
      };
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
    try {
      let bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
      const checkValid = await userModel.findOne({ email: bodyData.email });
      const comparePassword = await bcrypt.compare(
        bodyData.password,
        checkValid.password
      );
      if (!comparePassword) {
        return res
          .status(500)
          .json({ success: false, message: "email or password is wrong" });
      }
      
      

      return res.status(200).json({
        success: true,
        message: "login successfully",
        result: checkValid,
      
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