
import { LuClock4 } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

const MiddleContact = () =>{
   return (
    
     <div className="flex mt-[80px] justify-around flex-wrap items-center drop-shadow-lg border py-8">
         <div className="w-[300px] h-[120px] text-center text-lg">
            <p className="bg-[var(--Highlight-text-color)] text-white inline-block rounded-full p-[8px] rounded text-2xl" ><LuClock4 /></p> 
             <p>MON-SAT (9:00am - 4:00pm)</p>
             <p className="text-sm font-[500]">Working time</p>
         </div>
         <div className="w-[300px] h-[120px] text-center text-lg border-l border-r border-gray-500 ">
            <p className="bg-[var(--Highlight-text-color)] text-white inline-block rounded-full p-[8px] rounded text-2xl" ><FiMapPin /></p> 
             <p>SDBC, Umaria, Near Rau,Indore</p>
             <p className="text-sm font-[500]">Address</p>
         </div>
         <div className="w-[300px] h-[120px] text-center text-lg">
            <p className="bg-[var(--Highlight-text-color)] text-white inline-block rounded-full p-[8px] rounded text-2xl" ><FiPhoneCall /></p> 
             <p>+91 9999988888</p>
             <p className="text-sm font-[500]">Phone Number</p>
         </div>
       
          
     </div>
   ) 
}

export default MiddleContact