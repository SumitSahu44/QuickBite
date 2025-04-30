import React, { useEffect, useState } from 'react';
import './Cart.css';
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://quickbite-osfd.onrender.com";

  const fetchCart = () => {
    try {
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];
      console.log("Fetched local cart:", localCart);
      setCart(localCart);
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setCart([]);
    }
  };

  const saveCart = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const fetchFoodDetails = async () => {
    if (cart.length === 0) {
      setCartItems([]);
      return;
    }

    try {
      const foodIds = cart.map(item => item.foodId);
      const response = await axios.post(`${url}/api/food/listById`, {
        foodIds: foodIds,
      });

      const foodData = response.data;
      const mergedCart = cart.map((cartItem) => {
        const foodItem = foodData.data.find((f) => f._id === cartItem.foodId);
        return { ...cartItem, ...foodItem };
      });

      setCartItems(mergedCart);
    } catch (error) {
      console.error("Error fetching food details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      fetchFoodDetails();
    } else {
      setCartItems([]);
    }
  }, [cart]);

  const incrementQty = (id) => {
    const updated = cart.map(item =>
      item.foodId === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    saveCart(updated);
  };

  const decrementQty = (id) => {
    const updated = cart.map(item =>
      item.foodId === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    saveCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item.foodId !== id);
    saveCart(updated);
  };

  const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = 0;
  const total = subTotal + tax;

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl'>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <table className='w-full text-left border-collapse'>
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="py-2 px-4 text-gray-600 font-semibold">Items</th>
                  <th className="py-2 px-4 text-gray-600 font-semibold text-center">Qty</th>
                  <th className="py-2 px-4 text-gray-600 font-semibold text-center">Price</th>
                  <th className="py-2 px-4 text-gray-600 font-semibold text-center">Total</th>
                  <th className="py-2 px-4 text-gray-600 font-semibold text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item._id || index} className="border-b border-gray-200">
                    <td className="py-4 px-4 flex items-center space-x-4">
                      <img src={`${url}/images/${item.image}`} alt={item.name} className="w-12 h-12 rounded" />
                      <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button onClick={() => decrementQty(item.foodId)} className="text-orange-500 text-lg">-</button>
                        <span className="text-gray-800 font-medium">{item.quantity}</span>
                        <button onClick={() => incrementQty(item.foodId)} className="text-orange-500 text-lg">+</button>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-800 font-medium">₹{item.price}</td>
                    <td className="py-4 px-4 text-center text-gray-800 font-medium">₹{item.price * item.quantity}</td>
                    <td className="py-4 px-4 text-center text-gray-800 font-medium cursor-pointer">
                      <RxCross2 onClick={() => removeItem(item.foodId)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Sub Total</span>
                <span className="text-gray-800 font-medium">₹{subTotal}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-800 font-medium">₹{tax}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total</span>
                <span className="text-gray-800 font-semibold">₹{total}</span>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded w-full">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
