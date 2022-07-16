const express=require('express')
const mongoose = require('mongoose')
const chalk=require('chalk')
const router = require('./router')
const app=express()

class Server{
    constructor(){
        this.runServer()
        this.runMongoose()
        this.runRouter()
    }

    runServer(){
        app.listen(process.env.port,()=>console.log(chalk.bgGreen(' '),`server started at port: ${process.env.port}`))
        app.use(express.urlencoded({extended:true}))
    }

    async runMongoose(){
        await mongoose.connect('mongodb://127.0.0.1/ExerciseTracker')
        console.log(chalk.bgGreen(' '),'successfully connected to mongodb')
    }
    
    runRouter(){
        app.use('/api',router)
    }
}

module.exports=Server