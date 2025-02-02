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
  
      const listById = async (req, res) => {
        try {
          const { foodIds } = req.body;
      
          if (!foodIds || !Array.isArray(foodIds) || foodIds.length === 0) {
            return res.status(400).json({ success: false, message: "Invalid food IDs provided." });
          }
      
          // Fetch food items using $in operator for multiple IDs
          const foods = await foodModel.find({ _id: { $in: foodIds } });
      
          if (foods.length > 0) {
            return res.status(200).json({ success: true, data: foods });
          } else {
            return res.status(404).json({ success: false, message: "No food items found for provided IDs." });
          }
        } catch (error) {
          console.error("Error fetching food items:", error);
          return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
      };
      


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
module.exports = {addFood, listfood, removeFood, listById}