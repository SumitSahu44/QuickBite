const foodModel = require('../Models/foodModel')


// add food item 
const addFood = async(req,res)=>{
      let image_filename = `${req.file.filename}`;

      const food = new foodModel({
         name:req.body.name,
         description:req.body.description,
         price:req.body.price,
         category:req.body.category,
         image:image_filename

      })
}


module.exports = {addFood}