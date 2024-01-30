import React from 'react'
import { Link } from 'react-router-dom'

const MenuMobile = (props) => {
	const { showMenu, setShowMenu } = props

	const handleLinkClick = () => {
		setShowMenu(false)
	}


	return (
		<section className={`p-4 fixed top-0 bg-[#141414] w-52 h-full z-50  lg:hidden ${showMenu ? 'left-0' : '-left-full'} transition-all md:w-72`}>
			<nav>
				<ul className='mt-3 space-y-7 font-bold text-md text-[#BD926C]'>
					<li><Link to='/' onClick={handleLinkClick}>INICIO</Link></li>
					<li><Link to='category/hombres' onClick={handleLinkClick}>HOMBRES</Link></li>
					<li><Link to='category/mujeres' onClick={handleLinkClick}>MUJERES</Link></li>
					<li><Link to='category/vintage' onClick={handleLinkClick}>VINTAGE</Link></li>
					<li><Link to='/about-us' onClick={handleLinkClick}>NOSOTROS</Link></li>
					<li><Link to='/contact' onClick={handleLinkClick}>CONTACTO</Link></li>
				</ul>
			</nav>
		</section>
	)
}

export default MenuMobile