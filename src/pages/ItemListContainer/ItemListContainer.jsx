import React from 'react'
import AboutRoyal from '../../components/AboutRoyal/AboutRoyal'
import BannerSection from '../../components/BannerSection/BannerSection'
import MainCard from '../../components/MainCard/MainCard'

const ItemListContainer = ({ greeting }) => {
	return (
		<section>
			<BannerSection />
			{/* <h2 className='text-center text-white font-bold text-3xl'>{greeting}</h2> */}
			<MainCard />
			<AboutRoyal />
		</section>
	)
}

export default ItemListContainer