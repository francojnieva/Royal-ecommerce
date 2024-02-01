import React from 'react'
import img1 from './assets/about-us-img1.jpg'

const AboutUs = () => {

    const backgroundImage = `url(${img1})`

    return (
        <section className='pt-14 text-[#fff] lg:text-lg'>
            <div style={{ backgroundImage }} className='w-full bg-cover bg-center h-40 lg:h-56 xl:h-64'></div>
            <div className=' bg-[#bb6a27b9] h-32 md:w-[85%]'></div>
            <p className='-mt-20 ml-3 w-[80%] bg-[#0f0f0f] px-3 py-6  md:w-[70%]'><span className='text-[#ecbb8f] text-3xl lg:text-4xl'>E</span>n Royal, nos apasiona la fusión perfecta entre estilo y funcionalidad. Somos una tienda online dedicada a ofrecer una cuidada selección de relojes para hombres, mujeres y auténticos tesoros vintage. Creemos que un reloj no solo marca las horas, sino que también cuenta una historia de estilo y sofisticación.</p>
            <p className='mt-8 text-center px-3 py-6'><span className='text-[#ecbb8f]  text-3xl lg:text-4xl'>F</span>undada con el propósito de brindar a nuestros clientes una experiencia de compra única, Royal nació de la pasión por los relojes y el deseo de proporcionar piezas que complementen cualquier estilo de vida.</p>
            <div className='flex justify-end '>
                <p className='mt-8 bg-[#0f0f0f] w-[80%] px-3 py-6'><span className='text-[#ecbb8f]  text-3xl lg:text-4xl'>L</span>a calidad es nuestra firma. Nos asociamos con marcas líderes y expertos en relojería para garantizar que cada reloj que vendemos no solo mida el tiempo, sino que también destile elegancia.</p>
            </div>
            <div className='bg-[#bb6a27b9] h-32 md:w-[65%]'></div>
        </section>
    )
}

export default AboutUs