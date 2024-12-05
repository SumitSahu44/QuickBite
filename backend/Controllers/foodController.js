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

        try {
             await food.save();
             res.json({success:true,message:"Food Added"});
        } catch (error) {
            console.log(error)
            res.json({success:false,message:"Error"})
        }
}


// all food list
const listfood = async (req,res)=>{
        try{
            const foods = await foodModel.find({});
            res.json({succes:true,data:foods})
        }
        catch(error){
            console.log(error)
            res.json({success:false,message:"Error"})
        }
      }
module.exports = {addFood, listfood}