import React from 'react'
import { NavLink } from 'react-router-dom'




const Nav = () => {
  return (
    <div><header class=" text-gray-600 body-font p-1 h-15 bg-mycolor opacity-90  ">
      <toolbar> 
       
      
    <div class=" container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
      <NavLink to="./" exact class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
        {/* <span class="ml-3 text-xl">LOGO</span> */}
        <span className="font-extrabold text-black text-4xl">beCreator</span>
            <span className=" font-inter text-5xl text-ymcolor">
              .
            </span>
      </NavLink>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center ">
        {/* <NavLink class="mr-5 hover:text-gray-900">First Link</NavLink>
        <NavLink class="mr-5 hover:text-gray-900">Second Link</NavLink> */}
        <NavLink to="home" exact > <div class="mr-5 hover:border-b-2 border-b-2border-indigo-500 hover:text-indigo-500">HOME </div> </NavLink>
        <NavLink to="trend" exact > <div class="mr-5 hover:border-b-2 border-b-2border-indigo-500 hover:text-indigo-500"> TREND </div> </NavLink>
      </nav>
      <NavLink to="join" exact >
       <button class="rounded-full inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200  text-base mt-4 md:mt-0">Join Us
      </button>
      </NavLink>
    </div>
    </toolbar>
  </header></div>
  )
}

export default Nav