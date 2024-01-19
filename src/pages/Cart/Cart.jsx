import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Cart = () => {

    const { cart, totalToPay, emptyCart, removeProduct } = useContext(CartContext)

    return (
        <section className='pt-20 min-h-screen pb-20 text-[#fff] px-3 md:px-7 lg:px-12 flex flex-col items-center justify-center'>
            {
                cart.length === 0 ?
                    <>
                        <p className=' text-xl text-center lg:text-2xl my-3'>No hay productos agregados al carrito</p>
                        <Link to='/'><Button label={'Volver al inicio'}></Button></Link>
                    </>
                    :
                    <>
                        {
                            cart.map(({ id, name, model, image, category, quantity }) => (
                                <article key={id} className='w-full flex items-center justify-between p-3 border border-x-transparent border-t-transparent border-b-[#ecbb8f] lg:w-[70%]'>
                                    <div className=' flex items-center'>
                                        <img className={category === 'hombres' ? 'w-14 ml-3 mr-7 lg:w-20 lg:ml-7 lg:mr-9' : 'w-24 lg:w-36'} src={image} alt={name} />
                                        <div>
                                            <p className='text-[#ecbb8f]'>{name}</p>
                                            <p>{model}</p>
                                            <p>Cant: {quantity}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='bg-red-600 rounded-md p-2' onClick={() => removeProduct(id)}><FaTrash /></button>
                                    </div>
                                </article>
                            ))
                        }
                        <div className=' mt-4 text-[#ecbb8f]'>
                            <p className='text-lg lg:text-2xl'>Total a pagar: $ {totalToPay()}</p>
                        </div>
                        <div className='py-6 w-full flex justify-between items-center text-sm lg:w-[70%]'>
                            <button className='bg-red-600 rounded-md p-2' onClick={emptyCart}>Vaciar carrito</button>
                            <button className='text-[#ecbb8f] flex space-x-3 border rounded-md p-2 '>
                                <span>COMPRAR</span>
                                <IoIosArrowDroprightCircle className='text-lg' />
                            </button>
                        </div>
                    </>
            }
        </section>
    )
}

export default Cart