const foodModel = require('../Models/foodModel')
const fs = require('fs');

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
             return   res.json({success:true,message:"Food Added"});
        } catch (error) {
            console.log(error)
            return  res.json({success:false,message:"Error"})
        }
}


// all food list
const listfood = async (req,res)=>{
        try{
            const foods = await foodModel.find({});
            return  res.status(200).json({success:true,data:foods})
        }
        catch(error){
            console.log(error)
            return  res.json({success:false,message:"Error"})
        }
      }


  // Remove food item 
  const removeFood = async (req,res)=>{
          try {
            const food = await foodModel.findById(req.body.id);
              
           if(food)
           {
                fs.unlink(`uploads/${food.image}`,()=>{})

                await foodModel.findByIdAndDelete(req.body.id);

              return  res.json({success:true,message:"Food Removed"})
           }
           return res.status(404).json({message:"Food Not found"});
            
          } catch (error) {
            console.log(error)
           return res.json({success:false,message:"Error"})
        
          }
}    
module.exports = {addFood, listfood, removeFood}