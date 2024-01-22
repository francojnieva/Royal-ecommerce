import React from 'react'

const Button = ({ callback, label }) => {
    return (
        <button className='text-[#fff] py-2 px-4 bg-gradient-to-r from-[#1e130c] to-[#7a5c50] rounded-md' onClick={callback}>{label}</button>
    )
}

export default Button