import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import logo from "../logo.png"
import { useSelector } from 'react-redux';


const Navbar = () => {

  const{cart}=useSelector((state)=>state)

  return (
    <nav className="flex justify-between h-20 max-w-6xl mx-auto">
        <NavLink to="/">
        <div className='ml-5'>
        <img src={logo} width={50}/>
        </div>
        </NavLink>

        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'> 
            <NavLink to="/">
            <p>Home</p>
            </NavLink>

           <NavLink to="/cart">
            <div className='relative'>
            <FaCartShopping className='text-2xl'/>
            {
              cart.length>0 && 
              <span className="absolute -top-1 -right-1 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            }
            </div>
           </NavLink>
        </div>


    </nav>
  )
}

export default Navbar