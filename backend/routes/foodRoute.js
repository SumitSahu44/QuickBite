const express = require('express')
const {addFood,listfood} = require('../Controllers/foodController')
const multer = require('multer');

const foodRouter = express.Router();


// Image Storage Engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})



// routes 
foodRouter.post('/add',upload.single("image"),addFood)
foodRouter.get('/list',listfood)


module.exports = foodRouter
