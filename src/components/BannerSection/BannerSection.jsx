import React from 'react'

const BannerSection = () => {
  return (
    <section className='pt-14 px-3 flex flex-col justify-center items-center relative h-[32rem] bg-[url("src/components/BannerSection/assets/fondo-negro.jpg")] bg-cover bg-center space-y-5'>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="text-white text-center font-semibold z-10 text-4xl lg:text-5xl">Tu estilo, tu tiempo, nuestra pasión</h2>
        <p className='text-white text-center z-10 lg:text-xl'>Descubre la elegancia que perdura en cada segundo. Nuestros relojes son testigos de tu estilo único y tu tiempo inolvidable.</p>
        <button className='text-[#BD926C] z-10 border py-2 px-4 rounded-sm border-[#BD926C] shadow-lg shadow-[#BD926C]/20'>Explorar</button>
    </section>

  )
}

export default BannerSection