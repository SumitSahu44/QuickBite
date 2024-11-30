const dotenv = require('dotenv')
const express = require('express');
const app = express();
dotenv.config()



app.get('/',(req,res)=>{
    res.send("")
})


const PORT = process.env.PORT || 9000; // Default to 3000 if PORT is not defined
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})