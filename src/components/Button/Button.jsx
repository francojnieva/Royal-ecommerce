import React from 'react'

const Button = ({ callback, label }) => {
    return (
        <button className='text-[#fff] py-2 px-4 bg-gradient-to-r from-[#1e130c] to-[#9a8478] rounded-md' onClick={callback}>{label}</button>
    )
}

export default Button