import React from 'react'
import banner from './assets/banner2-section.jpg'

const AboutRoyal = () => {

	const backgroundImage = `url(${ banner })`

	return (
		<section className='about-royal shadow-inner relative px-3 h-[24rem] bg-cover bg-center flex justify-center items-center md:px-7 lg:px-12' style={{ backgroundImage }}>
			<div className="absolute inset-0 bg-black opacity-75"></div>
			<div className='z-10'>
				<p className='text-[#fff] text-center md:absolute md:text-start top-28 md:mr-4 text-lg tracking-wide lg:text-xl lg:mr-8 lg:top-32'><span className='text-[#ecbb8f] text-4xl lg:text-5xl'>N</span>uestros relojes no son solo instrumentos para medir el tiempo; son compañeros que viajan contigo en cada paso de tu jornada. Desde los momentos de celebración hasta los días de reflexión, un reloj Royal es más que un accesorio: es una declaración de tu estilo de vida.</p>
			</div>
		</section>
	)
}

export default AboutRoyal