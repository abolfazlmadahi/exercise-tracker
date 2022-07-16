const router=require('express').Router()
module.exports=router

const UserController=require('./controllers/user')
const ExerciseController = require('./controllers/exercise')

router.route('/users')
    .post(UserController.createUser)
    .get(UserController.listUsers)

router.post('/users/:_id/exercises',ExerciseController.createExercise)

router.get('/users/:_id/logs',UserController.logExercises)