import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import axios from 'axios'
const Product = () => {
   const [food_list, setFoodList] = useState([]);
   const url = "http://localhost:5000";
   
   const fetchFoodList = async ()=>{
      try {
         const response = await axios.get(`${url}/api/food/list`);
         if (response.data.success) {
           console.log(response.data.data);
           setFoodList(response.data.data);
         } else {
           alert(response.data.message);
         }
       } catch (error) {
         console.error("Error fetching food list:", error);
       }
   }

   useEffect(()=>{
       fetchFoodList();   
   },[])

  
  return (

   <div className='menu-container'>
          <p className='text-sm mt-[120px] text-center text-[var(--Highlight-text-color)]'>Product</p>
          <h2 className='text-[25px] text-center font-bold'>Most Popular Items</h2>

      <div className='flex justify-between gap-[30px]  flex-wrap'>
          {/* show data  */}
      {food_list.map((food, index) => (
          <div
            key={index} // Always provide a unique key for mapped elements
            className="w-[300px] pb-4 mt-12 rounded-b-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
          >
            <img
              src={`${url}/images/${food.image}`} // Proper template string usage
              className="rounded-t-3xl w-full h-[200px]  object-cover"
              alt={food.name || "Product Image"} // Dynamic alt text
            />
            <div className="flex justify-between px-5 py-3 items-start">
              <div>
                <h3>{food.name}</h3> {/* Use actual food name */}
                <p>{food.description}</p>
                <button className="bg-[var(--Highlight-text-color)] mt-2 px-[10px] py-[7px] rounded-full text-[10px] text-white">
                  Add To Cart
                </button>
              </div>
              <div>
                <span className="text-[15px] font-normal items-center">
                  <FaStar className="text-[var(--Highlight-text-color)] float-left mt-[3px] mr-[3px]" />
                  {food.rating || ""} {/* Dynamic rating */}
                </span>
                <p className="text-[15px] font-normal ">
                  ${food.price || "N/A"} {/* Dynamic price */}
                </p>
              </div>
            </div>
          </div>
        ))}
         
      


       
       



      </div> 

   </div>

  
  )
}

export default Product
