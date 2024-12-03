const dotenv = require('dotenv')
const express = require('express');
const userAPI = require('./routes/userAPI');
const adminAPI = require('./routes/adminAPI');
const connectDB = require('./config/db');

const app = express();
dotenv.config();



// db connect
connectDB();


app.use('/api', userAPI);
app.use('/admin/api', adminAPI);

const PORT = process.env.PORT || 9000; // Default to 3000 if PORT is not defined
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})


// mongodb+srv://quickbite_user:aJL3vSnBsxAeoWTk@cluster0.f1gwe.mongodb.net/?