import React from 'react'
import { TfiClose } from "react-icons/tfi";

const MenuMobile = () => {
	return (
		<section className='p-4 fixed top-0 bg-[#131313] w-full h-full z-50 hidden lg:hidden'>
			<div className='flex justify-end'>
				<TfiClose className='text-xl text-[#f5f5f5]'></TfiClose>
			</div>
			<nav>
				<ul className='mt-3 space-y-4 font-bold text-lg text-[#BD926C]'>
					<li><a href="#">INICIO</a></li>
					<li><a href="#">HOMBRES</a></li>
					<li><a href="#">MUJERES</a></li>
					<li><a href="#">CONTACTO</a></li>
				</ul>
			</nav>
		</section>
	)
}

export default MenuMobile