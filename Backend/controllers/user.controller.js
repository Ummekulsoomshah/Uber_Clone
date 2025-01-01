const { validationResult } = require('express-validator')
const userModel = require('../models/user.model')
const userService = require('../services/user.service')
module.exports.register = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    } const { email, password, firstname } = req.body

    const hashPassword = await userModel.hashPassword(password)

    try {
        const user = await userService.register({
            email,
            password: hashPassword,
            firstname
        })
        const token = user.generateAuthToken()
        res.cookie('token', token)
        res.status(201).json(user)
    } catch (err) {
        console.error('Error during user registration:', err) // Log the error for debugging
        res.status(500).json({ error: 'Internal Server Error', details: err.message }) // Send a valid response
    }
}
module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const isCheck = await user.comparePassword(password)
        if (!isCheck) {
            return res.status(400).json({ error: 'Invalid email or password' });

        }
        const token = user.generateAuthToken(); // Call the method on the user instance
        res.cookie('token', token);
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.error('Error during user login:', err); // Log the error for debugging
        res.status(500).json({ error: 'Internal Server Error', details: err.message }); // Send a valid response
    }
};
