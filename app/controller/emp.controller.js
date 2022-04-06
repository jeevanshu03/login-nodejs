const empModel = require("../models/address");
const salary = require("../models/salary");
const mongoose = require("mongoose");

class Employee {
  constructor() {
    return {
      salary: this.salary.bind(this),
      empAdd: this.empAdd.bind(this),
      addressLookup: this.addressLookup.bind(this),
      min: this.min.bind(this)
    };
  }

  async salary(req, res, next) {
    try {
      let body = req.body.data ? JSON.parse(req.body.data) : req.body;
      const user = {
        userId: body.userId,
        ctc: body.ctc,
        inHand: body.inHand,
        deduction: body.deduction,
        empName: body.empName,
      };

      const resultData = await salary.create(user);

      return res
        .status(201)
        .json({ message: "User Registered", result: resultData });
    } catch (err) {
      return res.json({ msg: "Invalid" });
    }
  }

  async empAdd(req, res, next) {
    try {
      let body = req.body.data ? JSON.parse(req.body.data) : req.body;
      const user = {
        userId: body.userId,
        homeAdd: body.homeAdd,
        officeAdd: body.officeAdd,
        empName: body.empName,
        empNo: body.empNo,
      };

      const resultData = await empModel.create(user);

      return res
        .status(201)
        .json({ message: "User Registered", result: resultData });
    } catch (err) {
      return res.json({ msg: "Invalid" });
    }
  }
 async addressLookup(req, res) {
    empModel
      .aggregate([
        {
          $lookup: {
            from: "salary",
            localField: "userId",
            foreignField: "userId",
            as: "address_info",
          },
        },
        {
          $unwind: "$address_info",
        },
      ])
      .then((result) => {
        res.send(result);
      })
      .catch((error) => [res.send("Not Working")]);
  };

   async min(req, res) {
    empModel
      .aggregate([
        {
          $group: {
            _id: "$userId",
            minSalary: { $min: "$ctc" },
          },
        },
      ])
      .then((result) => {
        res.send(result);
      })
      .catch((error) => [res.send("Not Working")]);
  };
}

 

module.exports = new Employee();
