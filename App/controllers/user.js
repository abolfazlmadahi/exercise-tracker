const User = require('../models/user')
const chalk = require('chalk')

class UserController {
    async createUser(req, res) {
        try {
            const { username } = req.body
            const user = await User.findOne({ username })
            if (user) {
                res.json({
                    username,
                    _id: user._id
                })
            } else {
                const newUser = await new User({ username }).save()
                res.json({
                    username,
                    _id: newUser._id
                })
            }
        } catch (error) {
            console.log(chalk.bgRed(error))
        }
    }

    async listUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users.map(item => {
                return {
                    username: item.username,
                    _id: item._id
                }
            }))
        } catch (error) {
            console.log(chalk.bgRed(error))
        }
    }

    async logExercises(req,res){
        try {
            const user=await User.findById(req.params._id).populate('log count')
            const {username,count,_id,log}=user
            res.json({username,count,_id,log})
        } catch (error) {
            console.log(chalk.bgRed(error))
        }
    }
}

module.exports = new UserController()