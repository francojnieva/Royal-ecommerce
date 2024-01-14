import React, { useEffect, useState } from 'react'
import getProductsById from '../../utils/getProductsById.js'
import { useParams } from 'react-router-dom'
import ItemDetails from '../../pages/ItemDetails/ItemDetails.jsx'

const ItemDetailsContainer = () => {

    const { id } = useParams()

    const [products, setProducts] = useState({})

    const [skeleton, setSkeleton] = useState(true)

    useEffect(() => {
        getProductsById(id).then(res => setProducts(res))
            .finally(() => {
                setSkeleton(false)
            })
    }, [id])

    return (
        <section className=' min-h-screen py-20 px-3 text-white flex flex-col justify-around items-center space-y-5 md:px-7 md:flex-row lg:px-12'>
            <ItemDetails products={products} skeleton={skeleton}   />
        </section>
    )
}

export default ItemDetailsContainer