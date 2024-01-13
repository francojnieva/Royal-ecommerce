import React, { useEffect, useState } from 'react'
import getProductsById from '../../utils/getProductsById'
import { useParams } from 'react-router-dom'

const ItemDetails = () => {

    const { id } = useParams()

    const [products, setProducts] = useState({})

    useEffect(() => {
        getProductsById(id).then(res => setProducts(res))
    }, [id])

    const {name, description, image, price, stock, model, category } = products

    return (
        <section className=' py-20 px-3 text-white flex flex-col space-y-5 md:px-7 md:flex-row md:justify-around md:items-center lg:h-screen m-auto lg:px-12 lg:w-[80%]'>
            <div>
                <img src={image} className=' w-[8rem] m-auto lg:w-[10rem]' alt={name} />
            </div>
            <div className=' space-y-3 px-5 md:w-[50%]'>
                <div className=' flex items-center justify-between text-xl lg:text-2xl xl:text-3xl'>
                    <h6 >{model}</h6>
                    <p className='text-[#ecbb8f]'>US ${price}</p>
                </div>
                <div className=' xl:text-xl space-y-4'>
                    <p><span className='text-[#ecbb8f]'>Marca:</span> {name}</p>
                    <p><span className='text-[#ecbb8f]'>Descripción:</span> {description}</p>
                    <p><span className='text-[#ecbb8f]'>Stock:</span> {stock}</p>
                </div>
            </div>
        </section>
    )
}

export default ItemDetails