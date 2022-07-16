const Exercise = require('../models/exercise')
const autoBind = require('auto-bind')
const chalk = require('chalk')

class ExerciseController {
    constructor() {
        autoBind(this)
    }

    async createExercise(req, res) {
        try {
            const { description, duration } = req.body
            const date = req.body.date ? new Date(req.body.date) : new Date()
            const exercise = await new Exercise({ description, duration, date, user: req.params._id }).save()
            res.json(await this.transformExercise(exercise))
        } catch (error) {
            console.log(chalk.bgRed(error))
        }
    }

    async transformExercise(exercise) {
        const fullExersice = await exercise.populate('user')
        const { description, duration, date, user: { username, _id } } = fullExersice
        return { description, duration, date: new Date(date).toDateString(), username, _id }
    }
}

module.exports = new ExerciseController()