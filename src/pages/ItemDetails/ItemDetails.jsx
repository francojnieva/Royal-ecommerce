import React, { useContext, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetails = ({ products, skeleton }) => {

    const { name, description, image, price, stock, model, category, id } = products

    const [counter, setCounter] = useState(1)

    const add = () => {
        setCounter(counter + 1)
    }

    const subtract = () => {
        setCounter(counter - 1)
    }

    const { addToCart, isInCart } = useContext(CartContext)

    const handleaddToCart = () => {
        const productToCart = { ...products, quantity: counter }
        addToCart(productToCart)
    }

    return (
        <>
            <div>
                {
                    skeleton ? <div className="skeleton w-40 h-52 bg-[#1b1b1b]"></div> :
                        <img src={image} className={`w-[8rem] m-auto lg:w-[10rem] ${category === 'mujeres' || category === 'vintage' ? 'min-w-[16rem]' : ''}`} alt={name} />
                }
            </div>
            <div className=' space-y-6 px-5 md:w-[50%]'>
                {
                    skeleton ?
                        <>
                            <div className="skeleton h-4 w-28 bg-[#1b1b1b]"></div>
                            <div className="skeleton h-4 w-full bg-[#1b1b1b]"></div>
                            <div className="skeleton h-4 w-full bg-[#1b1b1b]"></div>
                            <div className="skeleton h-4 w-full bg-[#1b1b1b]"></div>
                        </>
                        :
                        <>
                            <div className=' flex items-center justify-between text-xl lg:text-2xl xl:text-3xl'>
                                <h6 >{model}</h6>
                                <p className='text-[#ecbb8f]'>US ${price}</p>
                            </div>
                            <div className=' xl:text-xl space-y-4'>
                                <p><span className='text-[#ecbb8f]'>Marca: </span> {name}</p>
                                <p><span className='text-[#ecbb8f]'>Descripción:</span> {description}</p>
                                <p><span className='text-[#ecbb8f]'>Stock:</span> {stock}</p>

                                {
                                    isInCart(id)
                                        ?
                                        <>
                                        <p className=' text-green-500 italic'>Producto agregado al carrito</p>
                                        <Link to='/cart'><button className='mt-4 p-2 rounded-md bg-[#ecbb8f] text-black'> Ver carrito</button></Link>
                                        </>
                                        :
                                        <>
                                            <p className='text-[#ecbb8f]'>Cantidad:</p>
                                            <div className='flex items-center space-x-4'>
                                                <button onClick={subtract} className='py-1 px-3 rounded-md text-white bg-[#444444]' disabled={counter === 1} ><RiSubtractFill /></button>
                                                <p>{counter}</p>
                                                <button onClick={add} className=' py-1 px-3 rounded-md text-white bg-[#444444]' disabled={counter >= stock}><IoMdAdd /></button>
                                            </div>
                                            <button onClick={handleaddToCart} className='mt-4 p-2 rounded-md bg-[#ecbb8f] text-black'>Agregar al carrito</button>
                                        </>
                                }
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default ItemDetails