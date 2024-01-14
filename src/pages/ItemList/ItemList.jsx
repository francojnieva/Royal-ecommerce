import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import getProductsByCategory from '../../utils/getProductsByCategory.js'

const ItemList = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()

    useEffect(() => {
        getProductsByCategory(category).then(res => {
            setProducts(res)
        }).finally(() => {
            setLoading(false)
        })
    }, [category])

    return (
        <section className=' min-h-screen pb-20 pt-20 px-3 text-white md:px-7 lg:px-12 flex justify-evenly items-center flex-wrap gap-6'>
            {loading ? <div className=' text-[#ecbb8f] '><span className="loading loading-bars loading-lg"></span></div>
                :
                <>
                    {
                        products.map(({ name, id, image, price, model, category }) => {
                            return (
                                <Link to={`/producto/${id}`} key={id} className='relative p-3 space-y-4 bg-[#0a0a0a] rounded-md border border-gray-800 hover:border hover:border-[#ecbb8f] transition-all w-[10rem] md:w-[12rem] lg:w-[15rem]'>
                                    <h5 className=' absolute top-2 text-sm '>{name}</h5>
                                    <img src={image} className={`m-auto w-[10rem] ${category === 'hombres' ? 'w-[5.4rem]' : ''}`} alt={name} />
                                    <div>
                                        <h6>{model}</h6>
                                        <small className='text-[#7a7a7a]'>Precio:</small>
                                        <p className='text-[#ecbb8f] text-xl'>US ${price}</p>
                                    </div>
                                    <button className=' py-1 px-3 bg-[#1d1d1d] rounded-md'>
                                        Ver detalles
                                    </button>
                                </Link>
                            )
                        })
                    }
                </>

            }
        </section>
    )
}

export default ItemList