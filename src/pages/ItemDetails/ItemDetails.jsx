import React from 'react'

const ItemDetails = ({ products, skeleton }) => {

    const { name, description, image, price, stock, model, category } = products

    return (
        <>
        {
            
        }
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
                        </div>
                    </> 
                }
            </div>
        </>
    )
}

export default ItemDetails