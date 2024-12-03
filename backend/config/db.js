const mongoose = require('mongoose')

const connectDB = async ()=>{
     await mongoose.connect('mongodb+srv://quickbite_user:aJL3vSnBsxAeoWTk@cluster0.f1gwe.mongodb.net/QuickBite').then(()=>{console.log("Mongodb Connected")})
}


module.exports = connectDB
