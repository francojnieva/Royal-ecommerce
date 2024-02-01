import React from 'react'
import { IoIosWarning } from "react-icons/io";

const NotFound = () => {
    return (
        <section className=' h-screen flex flex-col justify-center items-center space-y-5'>
            <IoIosWarning  className=' text-yellow-400 text-5xl md:text-7xl'/>
            <h1 className=' text-2xl text-[#ecbb8f] font-bold md:text-4xl'>Página no encontrada</h1>
        </section>
    )
}

export default NotFound