import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='px-3 py-8 bg-[#131313] text-[#fafafa] flex flex-col items-center space-y-4 md:px-7 lg:px-12 lg:flex-row lg:space-y-0 lg:justify-between'>
        <div className='flex items-center space-x-3'>
            <a href="#" className='hover:underline transition-all'>Inicio</a>
            <a href="#" className='hover:underline transition-all'>Hombres</a>
            <a href="#" className='hover:underline transition-all'>Mujeres</a>
            <a href="#" className='hover:underline transition-all'>Contacto</a>
        </div>
        <div className='flex items-center space-x-4'>
            <FaFacebook className='text-xl text-[#e2af82]'></FaFacebook>
            <RiInstagramFill className='text-xl text-[#e2af82]'></RiInstagramFill>
            <IoLogoWhatsapp className='text-xl text-[#e2af82]'></IoLogoWhatsapp>
        </div>
        <div>
            <p>Copyright © 2023 - All right reserved</p>
        </div>
    </footer>
  )
}

export default Footer