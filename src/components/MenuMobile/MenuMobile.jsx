import React from 'react'
import { Link } from 'react-router-dom'

const MenuMobile = (props) => {
	const { showMenu } = props

	return (
		<section className={`p-4 fixed top-0 bg-[#131313] w-52 h-full z-50  lg:hidden ${showMenu ? 'left-0' : '-left-full'} transition-all md:w-72`}>
			<nav>
				<ul className='mt-3 space-y-7 font-bold text-md text-[#BD926C]'>
					<li><Link to='/'>INICIO</Link></li>
					<li><Link to=''>HOMBRES</Link></li>
					<li><Link to=''>MUJERES</Link></li>
					<li><Link to=''>VINTAGE</Link></li>
					<li><Link to='/contact'>CONTACTO</Link></li>
				</ul>
			</nav>
		</section>
	)
}

export default MenuMobile