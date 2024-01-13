import React from 'react'
import AboutRoyal from '../../components/AboutRoyal/AboutRoyal'
import BannerSection from '../../components/BannerSection/BannerSection'
import MainCard from '../../components/MainCard/MainCard'

const ItemListContainer = () => {
	return (
		<section>
			<BannerSection />
			<MainCard />
			<AboutRoyal />
		</section>
	)
}

export default ItemListContainer