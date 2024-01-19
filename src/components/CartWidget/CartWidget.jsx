import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

	const { quantityCart } = useContext(CartContext)

	return (
		<button className='flex items-center text-lg text-[#f5f5f5]'>
			<FaCartShopping />
			<p>({ quantityCart() })</p>
		</button>
	)
}

export default CartWidget