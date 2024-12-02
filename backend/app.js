const dotenv = require('dotenv')
const express = require('express');
const userAPI = require('./routes/userAPI');
const adminAPI = require('./routes/adminAPI');

const app = express();
dotenv.config();

app.use('/api', userAPI);
app.use('/admin/api', adminAPI);



const PORT = process.env.PORT || 9000; // Default to 3000 if PORT is not defined
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})