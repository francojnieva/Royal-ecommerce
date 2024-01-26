import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some((product) => product.id === id)
    }

    const quantityCart = () => cart.reduce((acc, product) => acc + product.quantity, 0)

    const totalToPay = () => cart.reduce((acc, product) => Math.ceil(acc + (product.quantity * product.price)), 0)

    const emptyCart = () => setCart([])

    const removeProduct = (id) => setCart(cart.filter((product) => product.id !== id)) 

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])
    
    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            isInCart,
            quantityCart,
            totalToPay,
            emptyCart,
            removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}