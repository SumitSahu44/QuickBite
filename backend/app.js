const dotenv = require('dotenv')
const express = require('express');
const connectDB = require('./config/db');
const foodRoute = require('./routes/foodRoute')
const app = express();
dotenv.config();



// db connect
connectDB();

// api endpoint
app.use('/api/food', foodRoute);


const PORT = process.env.PORT || 9000; // Default to 3000 if PORT is not defined
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})


// mongodb+srv://quickbite_user:aJL3vSnBsxAeoWTk@cluster0.f1gwe.mongodb.net/?