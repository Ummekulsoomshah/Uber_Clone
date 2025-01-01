const userModel = require('../models/user.model')

module.exports.register = async ({ email, password, firstname }) => {
    try {
        const user = await userModel.create({
            email, 
            password,
          firstname
        })
        return user
    } catch (err) {
        throw err
    }
}
