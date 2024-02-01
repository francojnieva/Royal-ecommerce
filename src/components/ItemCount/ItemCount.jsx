import React from 'react'

const ItemCount = ({ callback, disabled, children }) => {
    return (
        <button onClick={callback} className='py-1 px-3 rounded-md text-white bg-[#444444]' disabled={disabled} >
            {children}
        </button>


    )
}

export default ItemCount