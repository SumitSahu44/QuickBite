const express = require('express')
const {addFood, listfood, removeFood, listById} = require('../Controllers/foodController')
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
foodRouter.post('/remove', removeFood)
foodRouter.post('/listById',listById)

module.exports = foodRouter
