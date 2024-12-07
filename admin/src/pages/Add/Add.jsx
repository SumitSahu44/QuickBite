import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
// import { useEffect } from 'react'
const Add = () => {

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

  return (
    <div className='add'>
        <form className='flex-col'>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image):assets.uploadImg} alt="" />
                </label>
                <input onClick={(e)=>{setImage(e.target.files[0])}} type="file" id='image' hidden required/>
            </div> 
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here'/>
               </div>
               <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here'></textarea>
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
