const empModel = require('../models/Address')
const salary = require('../models/salary')
const mongoose = require('mongoose');

class emp {
    constructor() {
      return {
        salary:this.salary.bind(this),
        empAdd:this.empId.bind(this),
        min:this.min.bind(this),
      };
    }



    async salary(req, res, next) {
        try {
          let body = req.body.data ? JSON.parse(req.body.data) : req.body;
          const user = {
            empId:body.empId,
            ctc:body.ctc,
            inHand:body.inHand,
            currentlyWorking:body.currentlyWorking ,
            empName:body.empName 
            
            
          };

          const resultData = await salary.create(user);
          
    
          return res.status(201).json({ message: "User Registered",  result: resultData, });
        } catch (err) {
          return res.json({ msg:"Invalid", })
        }
                        }


                    async empAdd(req, res, next) {
                            try {
                              let body = req.body.data ? JSON.parse(req.body.data) : req.body;
                              const user = {
                                empId:body.empId,
                                homeAdd:body.homeAdd,
                                officeAdd:body.officeAdd,
                                empName:body.empName ,
                                empNo:body.empNo 
                                
                                
                              };
                    
                              const resultData = await empModel.create(user);
                              
                        
                              return res.status(201).json({ message: "User Registered",  result: resultData, });
                            } catch (err) {
                              return res.json({ msg:"Invalid", })
                            }
                                            }
            async min(req,res,next){
                try{
                   
                }catch(err){

                }
            }
    } 
