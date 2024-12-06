import React from 'react'
import { LogoPrincipal } from "../../UI/LogoPrincipal/LogoPrincipal"
import { Navbar } from "../../UI/Navbar/Navbar"

export const Header = () => {
  return (
    <div className='flex justify-between items-center bg-cyan-800 w-screen h-20  text-white'>
      <LogoPrincipal/>    
        <h1>Carlos Andres Perdomo Medina</h1>
        <Navbar/>   
    
    </div>
  )
}
