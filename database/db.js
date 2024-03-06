const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/Test'
const connectDb = async () => {
    try {
        await mongoose.connect(url)
        console.log('db connection successfull...')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDb }