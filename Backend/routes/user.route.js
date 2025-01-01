const express=require('express')
const router=express.Router()
const {body}=require('express-validator')
const userController=require('../controllers/user.controller')

router.post('/register',
[body('email').isEmail().withMessage('Invalid email'),
body('password').isLength({min:5}).withMessage('password should be at least 5 characters long'),
body('firstname').isLength({min:3}).withMessage('firstname should be at least 3 characters long')],userController.register)
router.post('/login',userController.login)

module.exports=router



