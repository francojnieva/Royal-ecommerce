import React from 'react'
import fondo from '../MainCard/assets/fondo.jpg'
import manWatch from '../MainCard/assets/reloj-hombre.png'
import womanWatch from '../MainCard/assets/reloj-mujer.png'
import vintageWatch from '../MainCard/assets/reloj-vintage.png'
import { TfiArrowCircleRight } from "react-icons/tfi";
import { Link } from 'react-router-dom'


const MainCard = () => {

	const backgroundImage = `url(${fondo})`

	return (
		<section className=' flex flex-col items-center px-3 py-2 text-[#ecbb8f] space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:px-7 lg:px-12' >
			<Link to='' className=' relative flex flex-col items-center gap-2 w-full shadow-inner rounded-md py-3 bg-cover bg-center lg:hover:scale-110 transition duration-300 ease-in-out lg:h-[20rem]' style={{ backgroundImage }}>
				<h5 className=' text-xl mb-3'>Hombres</h5>
				<TfiArrowCircleRight className='absolute top-10 text-xl' />
				<img src={manWatch} className=' w-[13rem] mt-2 ml-2 md:w-[11rem] lg:w-[13rem]' alt="Reloj de hombre" />
			</Link>
			<Link to='' className='relative flex flex-col items-center gap-2 w-full shadow-inner rounded-md py-3 bg-cover bg-center hover:scale-110 transition duration-300 ease-in-out lg:h-[20rem]' style={{ backgroundImage }}>
				<h5 className=' text-xl mb-3'>Mujeres</h5>
				<TfiArrowCircleRight className='absolute top-10 text-xl' />
				<img src={womanWatch} className=' w-[16rem] ml-3' alt="Reloj de mujer" />
			</Link>
			<Link to='' className='relative flex flex-col items-center gap-2 w-full shadow-inner rounded-md py-3 bg-cover bg-center hover:scale-110 transition duration-300 ease-in-out lg:h-[20rem]' style={{ backgroundImage }}>
				<h5 className=' text-xl mb-3'>Vintage</h5>
				<TfiArrowCircleRight className='absolute top-10 text-xl ' />
				<img src={vintageWatch} className=' w-[16rem] ml-3' alt="Reloj de mujer" />
			</Link>
		</section>
	)
}

export default MainCard