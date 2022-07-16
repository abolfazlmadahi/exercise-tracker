const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }
}, { toJSON: { virtuals: true }})

userSchema.virtual('log', {
    ref: 'exercise',
    localField: '_id',
    foreignField: 'user'
})

userSchema.virtual('count', {
    ref: 'exercise',
    localField: '_id',
    foreignField: 'user',
    count:true
})

module.exports = mongoose.model('user', userSchema)