import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

import axios from 'axios'
import { toast } from 'react-toastify'
// import { useEffect } from 'react'
const Add = () => {
  const url = "http://localhost:5000";

  const [image,setImage] = useState(false)
 const [data, setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Breakfast"
 })

 const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
   setData(data=>({...data,[name]:value}))

 }

//   useEffect(()=>{
//       console.log(data)
//   },[data])


 const onSubmitHandler = async(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        
        const response = await axios.post(`${url}/api/food/add`, formData)
        console.log(response)
        if(response.data.success)
        {
          JSON.stringify(response);
           setData({
            name:"",
            description:"",
            price:"",
            category:"Breakfast"
         })
         setImage(false);
         toast.success(response.data.message)
        }else{
             alert("hi")
        }
 }

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image):assets.uploadImg} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
            </div> 
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here'/>
               </div>
               <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
              </div>
               <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product category</p>
                         <select name="category" onChange={onChangeHandler} >
                            <option value="Breakfast">Breakfast</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Main Course">Main Course</option>
                          </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20' />
                    </div>
               </div>
              
              <button type='submit' className='add-btn'>Add</button>
            
        </form>
    </div>
  )
}

export default Add
