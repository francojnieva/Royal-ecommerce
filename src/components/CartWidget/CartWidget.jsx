import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

	const { quantityCart } = useContext(CartContext)

	return (
		<Link to='/cart' className='flex items-center text-lg text-[#f5f5f5]'>
			<FaCartShopping />
			<p>({ quantityCart() })</p>
		</Link>
	)
}

export default CartWidget