import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../../services/firebaseConfig'
import { MdRemoveShoppingCart } from "react-icons/md";
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const ShoppingHistory = () => {

    const [shopping, setShopping] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getDocs(collection(db, "shopping"))
            .then(item => {
                const products = item.docs.map((doc) => ({
                    id: doc.id,
                    cart: doc.data().cart.map(item => ({
                        name: item.name,
                        model: item.model,
                        quantity: item.quantity,
                        id: item.id
                    }))
                }))
                setShopping(products)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className='px-4 py-20 min-h-screen text-[#fff] md:px-7 lg:px-12'>
            <h1 className='text-[#ecbb8f] text-2xl mb-5' hidden={shopping.length === 0}>Tus compras:</h1>
            <div className='flex justify-center items-center flex-wrap gap-4'>
                {loading
                    ?
                    <div className=' text-[#ecbb8f] '><span className="loading loading-bars loading-lg"></span></div>
                    :
                    shopping.length === 0
                        ?
                        (<div className='flex flex-col items-center space-y-3'>
                            <MdRemoveShoppingCart className='text-4xl text-[#ecbb8f]' />
                            <p className='text-lg lg:text-xl'>No realizaste ninguna compra</p>
                            <Link to='/'><Button label='Ir al inicio' /></Link>
                        </div>)
                        :
                        shopping.map(({ id, cart }) => (
                            <div key={id} className='p-3 w-full border border-[#ecbb8f] rounded-md bg-[#111111] lg:w-[50%]'>
                                {cart.map((item) => (
                                    <div key={item.id} className=' flex items-center justify-evenly'>
                                        <p>{item.name}</p>
                                        <p>{item.model}</p>
                                        <p>Cant.: {item.quantity}</p>
                                    </div>
                                ))}
                            </div>
                        ))
                }
            </div>

        </section>
    )
}

export default ShoppingHistory