import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import MenuMobile from '../MenuMobile/MenuMobile'
import { RiMenuFill } from "react-icons/ri";

const NavBar = () => {
	return (
		<header>
			<nav className='bg-[#131313] text-[#BD926C] flex justify-between items-center fixed top-0 w-full p-3 md:px-7 lg:px-12 z-40'>
				<h1 className='text-3xl font-bold tracking-wide'>Royal</h1>
				<div className='hidden lg:block'>
					<ul className=' flex items-center space-x-8 font-bold'>
						<li><a href="#" className='hover:text-[#ecbb8f] transition-all'>INICIO</a></li>
						<li><a href="#" className='hover:text-[#ecbb8f] transition-all'>HOMBRES</a></li>
						<li><a href="#" className='hover:text-[#ecbb8f] transition-all'>MUJERES</a></li>
						<li><a href="#" className='hover:text-[#ecbb8f] transition-all'>CONTACTO</a></li>
					</ul>
				</div>
				<div className='flex items-center space-x-4'>
					<CartWidget></CartWidget>
					<RiMenuFill className='text-2xl lg:hidden text-[#f5f5f5]'></RiMenuFill>
				</div>
			</nav>
			<MenuMobile></MenuMobile>
		</header>
	)
}

export default NavBar