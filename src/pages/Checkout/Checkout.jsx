import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../context/CartContext'
import { MdRemoveShoppingCart } from "react-icons/md";
import { IoBagCheckSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button'
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../../services/firebaseConfig.js';


const Checkout = () => {

    const { handleSubmit, register, formState: { errors } } = useForm()

    const [shoppingId, setShoppingId] = useState(null)

    const [userName, setUserName] = useState('')

    const { cart, emptyCart } = useContext(CartContext)

    const shoppingReference = collection(db, 'shopping')

    const onSubmit = (user) => {
        const shopping = {
            cart,
            user,
            date: new Date()
        }

        addDoc(shoppingReference, shopping)
            .then(doc => {
                setShoppingId(doc.id)
                setUserName(user.name)
                emptyCart()
            })

        cart.forEach(item => {
            const documentRef = doc(db, 'products', item.id)
            getDoc(documentRef)
                .then((doc) => {
                    let stock = doc.data().stock
                    if (stock - item.quantity >= 0) {
                        updateDoc(documentRef, { stock: stock - item.quantity })
                    }
                })
        })
    }

    if (shoppingId) {
        return (
            <div className='text-[#fff] flex flex-col justify-center items-center space-y-4 h-screen'>
                <div className='py-10 px-5 bg-[#111111] rounded-md flex flex-col items-center space-y-4 text-center border border-[#ecbb8f]'>
                    <IoBagCheckSharp className='text-6xl text-[#4eda49]' />
                    <p className='text-xl lg:text-2xl'><span className='text-[#ecbb8f] text-2xl lg:text-3xl'>{userName}</span><br />¡Muchas gracias por tu compra!</p>
                    <p className='text-base'>Tu orden se generó correctamente</p>
                    <p className=' bg-[#4b4b4bf3] py-1 px-3 rounded-md'>{shoppingId}</p>
                    <small className='text-[#ecbb8f] text-sm'>Asegúrate se guardar el ID del producto</small>
                </div>
                <Link to='/'><Button label='Ir al inicio' /></Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return (
            <div className='text-[#fff] px-3 h-screen flex flex-col justify-center items-center space-y-4'>
                <MdRemoveShoppingCart className=' text-4xl text-[#ecbb8f]' />
                <p className='text-center text-lg lg:text-xl'>Agregue por lo menos un producto al carrito para poder continuar</p>
                <Link to='/'><Button label='Ir al inicio' /></Link>
            </div>
        )
    }

    return (
        <section className='px-3 text-[#fff] h-screen flex justify-center items-center'>
            <form className=' w-[95%] md:w-[70%] lg:w-[40%]' onSubmit={handleSubmit(onSubmit)}>
                <h2 className=' text-3xl text-center pb-5 text-[#ecbb8f]'>Finalizar compra</h2>
                <div className='flex flex-col space-y-2 mb-6 lg:pl-4'>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        className='py-2 outline-none bg-[#020202] border border-t-[#020202] border-x-[#020202]  border-b-[#ecbb8f]'
                        type="text"
                        placeholder='Ingrese su nombre'
                        name='name'
                        autoComplete='off'
                        id="name"
                        {...register('name', {
                            required: 'Este campo es obligatorio',
                            maxLength: { value: 25, message: 'El nombre no debe superar los 25 caracteres' },
                            minLength: { value: 3, message: 'El nombre debe tener entre 3 y 25 caracteres' },
                        })}
                    />
                    <span className='text-xs text-red-600 pb-3 xl:text-base'>{errors.name && errors.name.message}</span>
                </div>
                <div className=' flex flex-col space-y-2 mb-6 lg:pl-4' >
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        className='py-2 outline-none bg-[#020202] border border-t-[#020202] border-x-[#020202]  border-b-[#ecbb8f]'
                        type="email"
                        placeholder='Ingrese su correo electrónico'
                        name='email'
                        autoComplete='off'
                        id="email"
                        {...register('email', {
                            required: 'Este campo es obligatorio',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Correo electrónico inválido',
                            },
                        })}
                    />
                    <span className='text-xs text-red-600 pb-3 xl:text-base'>{errors.email && errors.email.message}</span>
                </div>
                <button type="submit" className='bg-[#222222] text-sm  py-2 px-4 rounded-md lg:ml-4'>Confirmar</button>
            </form>
        </section>
    )
}

export default Checkout