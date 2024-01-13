import React, { useEffect, useState } from 'react'
import getProductsById from '../../utils/getProductsById.js'
import { useParams } from 'react-router-dom'
import ItemDetails from '../../pages/ItemDetails/ItemDetails.jsx'

const ItemDetailsContainer = () => {

    const { id } = useParams()

    const [products, setProducts] = useState({})

    useEffect(() => {
        getProductsById(id).then(res => setProducts(res))
    }, [id])

    return (
        <ItemDetails products={products} />
    )
}

export default ItemDetailsContainer