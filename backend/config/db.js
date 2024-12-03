const mongoose = require('mongoose')

const connectDB = async ()=>{
     await mongoose.connect(process.env.MONGODB_URL).then(()=>{console.log("Mongodb Connected")})
}


module.exports = connectDB
