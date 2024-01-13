import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import MenuMobile from '../MenuMobile/MenuMobile'
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}

	return (
		<header>
			<nav className='bg-[#080808] text-[#BD926C] flex justify-between items-center fixed top-0 w-full p-3 md:px-7 lg:px-12 z-40'>
				<Link to='/' className='text-3xl font-bold tracking-wide'>Royal</Link>
				<div className='hidden lg:block'>
					<ul className=' flex items-center space-x-8 font-bold'>
						<li><Link to='/' className='hover:text-[#ecbb8f] transition-all'>INICIO</Link></li>
						<li><Link to='category/hombres' className='hover:text-[#ecbb8f] transition-all'>HOMBRES</Link></li>
						<li><Link to='category/mujeres' className='hover:text-[#ecbb8f] transition-all'>MUJERES</Link></li>
						<li><Link to='category/vintage' className='hover:text-[#ecbb8f] transition-all'>VINTAGE</Link></li>
						<li><Link to='contact' className='hover:text-[#ecbb8f] transition-all'>CONTACTO</Link></li>
					</ul>
				</div>
				<div className='flex items-center space-x-4'>
					<CartWidget></CartWidget>
					<button onClick={toggleMenu} className='text-3xl lg:hidden text-[#f5f5f5]'>
						{showMenu ? <IoMdClose></IoMdClose> : <RiMenuFill></RiMenuFill>}
					</button>
				</div>
			</nav>
			<MenuMobile showMenu={showMenu}></MenuMobile>
		</header>
	)
}

export default NavBar