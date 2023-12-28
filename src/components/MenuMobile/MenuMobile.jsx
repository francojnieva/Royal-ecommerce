import React from 'react'

const MenuMobile = (props) => {
	const { showMenu } = props

	return (
		<section className={`p-4 fixed top-0 bg-[#131313] w-52 h-full z-50  lg:hidden ${showMenu ? 'left-0' : '-left-full'} transition-all md:w-72`}>
			<nav>
				<ul className='mt-3 space-y-4 font-bold text-md text-[#BD926C]'>
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