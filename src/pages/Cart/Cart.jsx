import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrash } from "react-icons/fa";
const Cart = () => {

    const { cart, totalToPay } = useContext(CartContext)

    return (
        <section className='pt-20 min-h-screen pb-20 text-[#d3d3d3] px-3 md:px-7 lg:px-12 flex flex-col items-center justify-center'>
            {
                cart.length === 0 ? 
                <>
                    <p className=' text-xl lg:text-2xl mt-3'>No hay productos agregados al carrito</p>
                </> 
                :
                <>
                {
                    cart.map(({id, name, model, image, category, quantity}) => (
                        <article key={id} className='w-full flex items-center justify-between p-3 border border-x-transparent border-t-transparent border-b-[#ecbb8f] lg:w-[70%]'>
                            <div className=' flex items-center'>
                                <img className={category === 'hombres' ? 'w-14 ml-3 mr-7 lg:w-16 lg:ml-7 lg:mr-9' : 'w-24 lg:w-32'} src={image} alt={name} />
                                <div>
                                    <p className='text-[#ecbb8f]'>{name}</p>
                                    <p>{model}</p>
                                    <p>Cant: {quantity}</p>
                                </div>
                            </div>
                            <div>
                                <button className=' text-white p-2 bg-red-700 rounded-md'><FaTrash  /></button>
                            </div>
                        </article>
                    ))
                }
                    <article className=' mt-4 text-[#ecbb8f]'>
                        <p className=' text-xl lg:text-2xl'>Total a pagar: $ {totalToPay()}</p>
                    </article>  
                </>
            }
            
        </section>
    )
}

export default Cart