const userRegisterControl = require('../controller/userControllers/userRegister')
const userLoginControl = require('../controller/userControllers/userLogin')
const userRegisterForm = require('../controller/userControllers/userRegisterForm')
const userLoginForm = require('../controller/userControllers/userLoginForm')
const express = require('express');
const router = express.Router();

router.get("/register", userRegisterForm)
router.post("/register", userRegisterControl)
router.get("/admin", userLoginForm)
router.post("/login", userLoginControl)


module.exports = router;