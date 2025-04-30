import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { FaStar } from "react-icons/fa";
import axios from 'axios'

const Product = () => {
   const [food_list, setFoodList] = useState([]);
   const [cart, setCart] = useState([]);
   const [loading, setLoading] = useState(true); // 🟢 New loading state
   const url = "https://quickbite-osfd.onrender.com";

   const fetchFoodList = async () => {
      try {
         const response = await axios.get(`${url}/api/food/list`);
         if (response.data.success) {
           setFoodList(response.data.data);
         } else {
           toast.error(response.data.message)
         }
       } catch (error) {
         console.error("Error fetching food list:", error);
       } finally {
         setLoading(false); // 🟢 Stop loading regardless of success/failure
       }
   }

   useEffect(() => {
       fetchFoodList();   
   }, [])

   const addToCart = (foodId) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cart.findIndex(item => item.foodId === foodId);
        if (existingItemIndex !== -1) {
          cart[existingItemIndex].quantity += 1;
        } else {
          cart.push({ foodId, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart(cart);
        toast.success("Item added to cart!")
   }

   return (
     <div className='menu-container'>
       <p className='text-sm mt-[120px] text-center text-[var(--Highlight-text-color)]'>Product</p>
       <h2 className='text-[25px] text-center font-bold'>Most Popular Items</h2>

       <div className='flex justify-between gap-[30px] flex-wrap'>
         {loading ? (
           <div className="w-full flex justify-center items-center py-20">
             <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[var(--Highlight-text-color)]"></div>
             <span className='ml-4 text-lg text-gray-600'>Loading Menu...</span>
           </div>
         ) : (
           food_list.map((food, index) => (
             <div
               key={index}
               className="w-[300px] pb-4 mt-12 rounded-b-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
             >
               <img
                 src={`${url}/images/${food.image}`}
                 className="rounded-t-3xl w-full h-[200px] object-cover"
                 alt={food.name || "Product Image"}
               />
               <div className="flex justify-between px-5 py-3 items-start">
                 <div>
                   <h3>{food.name}</h3>
                   <p>{food.description}</p>
                   <button
                     onClick={() => { addToCart(food._id) }}
                     className="bg-[var(--Highlight-text-color)] mt-2 px-[10px] py-[7px] rounded-full text-[10px] text-white"
                   >
                     Add To Cart
                   </button>
                 </div>
                 <div>
                   <span className="text-[15px] font-normal items-center">
                     <FaStar className="text-[var(--Highlight-text-color)] float-left mt-[3px] mr-[3px]" />
                     {food.rating || ""}
                   </span>
                   <p className="text-[15px] font-normal ">
                     ${food.price || "N/A"}
                   </p>
                 </div>
               </div>
             </div>
           ))
         )}
         <ToastContainer />
       </div>
     </div>
   )
}

export default Product;
