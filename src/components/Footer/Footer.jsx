import React from 'react'
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='px-3 py-6 bg-[#15191E] text-[#fff] flex flex-col space-y-4 md:px-7 lg:px-12 md:flex-row md:space-y-0 md:justify-between'>
			<div className='flex flex-col space-y-6 mb-5 text-[#babfc9]'>
				<h4 className=' text-[#6C727C] font-bold'>PÁGINA</h4>
				<Link to='/' className='hover:underline transition-all'>Inicio</Link>
				<Link to='category/hombres' className='hover:underline transition-all'>Hombres</Link>
				<Link to='category/mujeres' className='hover:underline transition-all'>Mujeres</Link>
				<Link to='category/vintage' className='hover:underline transition-all'>Vintage</Link>
				<Link to='contact' className='hover:underline transition-all'>Contacto</Link>
			</div>
			<div className='flex flex-col space-y-6'>
				<h4 className=' text-[#6C727C] font-bold'>SOCIAL</h4>
				<div className=' flex space-x-3 text-2xl text-[#babfc9]'>
					<LuFacebook></LuFacebook>
					<FaInstagram></FaInstagram>
					<FaWhatsapp></FaWhatsapp>
				</div>
			</div>
			<div className='pt-4 text-[#babfc9]'>
				<small>Copyright © 2024 - All right reserved</small>
			</div>
		</footer>
	)
}

export default Footer