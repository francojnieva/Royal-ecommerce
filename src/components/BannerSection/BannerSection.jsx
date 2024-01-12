import React from 'react'
import banner from './assets/banner.jpg'

const BannerSection = () => {

	const backgroundImage = `url(${ banner })`

	return (
		<section className='pt-14 px-3 flex flex-col justify-center items-center relative h-[32rem] bg-cover space-y-5' style={{ backgroundImage }}>
			<div className="absolute inset-0 bg-black opacity-80"></div>
			<h1 className="text-white text-center font-bold z-10 text-4xl lg:text-5xl xl:text-6xl">Tu estilo, tu tiempo, nuestra pasión</h1>
			<p className='text-white text-center z-10 lg:text-xl'>Descubre la elegancia que perdura en cada segundo.</p>
		</section>

	)
}

export default BannerSection