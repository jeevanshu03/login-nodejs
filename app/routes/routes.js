const express = require('express');
const router = express.Router();
const { register, login } = require('../middleware/validator')
const User = require('../controller/controller');
const emp = require('../controller/emp.controller')


router.post('/register',register,User.register)
router.post('/login',login,User.login)
router.get('/min',emp.min)
router.get('/address',emp.addressLookup)
router.post('/empadd',emp.empAdd)
router.post('/salary',emp.salary)
module.exports = router;
