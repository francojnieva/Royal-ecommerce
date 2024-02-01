import products from './products.js'

const getProductsById = (id) => {
    return new Promise ((res, rej) => {
        setTimeout(() =>  {
            res(products.find(prod => prod.id.toString() === id))
        }, 1000)
    })
}

export default getProductsById