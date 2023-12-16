import React from 'react'

const ItemListContainer = ({ greeting }) => {
	return (
		<section>
			<h2 className='text-center font-bold text-3xl'>{greeting}</h2>
		</section>
	)
}

export default ItemListContainer