const mongoose = import('mongoose');


const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:object,default:{}}
},{minimize:false})

const userModel = mongoose.model.user || mongoose.model("User", userSchema)
export default userModel;