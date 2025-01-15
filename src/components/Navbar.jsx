import React from 'react'
import logo from "../assets/Logo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const Navbar = () => {
  return  <nav className=' mb-20 flex items-center justify-between py-6' >
    
    <div className='flex flex-grow items-center' >
        <h1 className='mx-2 w-10 font-semibold text-2xl hover:text-purple-300'> Pr </h1>
    </div>

    <div className='mt-8 mr-7 flex items-center justify-center gap-4 text-2xl hover:text-purple-300'>
       <a href="https://www.linkedin.com/in/pradeep-rajan-sof-dev--/"><FaLinkedin/></a>  
    </div>

    <div className='mt-8 mr-7 flex items-center justify-center gap-4 text-2xl hover:text-purple-300'>
       <a href=""><FaGithub/></a> 
    </div>

    <div className='mt-8 flex items-center justify-center gap-4 text-2xl hover:text-purple-300'>
        <a href="https://www.instagram.com/pradeep_x02/"><FaInstagram/></a>
    </div>
    
  </nav>

  
}

export default Navbar
