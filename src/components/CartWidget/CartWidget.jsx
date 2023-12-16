import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
	return (
		<button className='flex items-center text-lg text-[#f5f5f5]'>
			<FaCartShopping />(0)
		</button>
	)
}

export default CartWidget