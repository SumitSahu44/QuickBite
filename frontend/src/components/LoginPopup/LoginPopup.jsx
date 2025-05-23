import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import './LoginPopup.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

// it only show when user click on signin button.
const LoginPopup = ({setShowLogin}) => {
 const url = "https://quickbite-osfd.onrender.com"
  const [currState,setCurrState] = useState("Login")
  const[data,setData] = useState({
     name:"",
     email:"",
     password:""
  })
  

  const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
     
       setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (event)=>{
        event.preventDefault();
        let newURl = url;
        if(currState==="Login")
        {
         newURl += "/api/user/login"
        }else{
         newURl += "/api/user/register" 
        }

         const response = await axios.post(newURl, data);
         if(response.data.success)
         {
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
         }else{
            // alert(response.data.message);
            toast.error(response.data.message)
         }

  }

  return (
    <div className='login-container'>
       <form onSubmit={onLogin} className="login-popup-container">
         <div className="login-popup-title">
            <h2>{currState}</h2>
            <ImCross onClick={()=>{setShowLogin(false)}} className='cross-icon' />
         </div>

         <div className="login-popup-inputs">

          {currState==="Sign Up"? <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required="" />: <></>}
             <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required="" />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required="" />
        
         </div>
          <button type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
          <div className="login-popup-condition">
             <input type="checkbox" required />
             <p>By continuing, i agree to the terms of use & private policy.</p>
          </div>
          {currState==="Sign Up"
          ?<p>Already have an account? <span onClick={()=>{setCurrState("Login")}} className='cursor' >Login here</span></p>
          :<p>Create a new account? <span onClick={()=>{setCurrState("Sign Up")}} className='cursor'>Click here</span></p>
      }
         </form>
         <ToastContainer/>
    </div>
  )
}

export default LoginPopup
