import products from './products.js'

const getProductsByCategory = (category) => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(products.filter(product => product.category === category))
        }, 1000)
    })
}

export default getProductsByCategory