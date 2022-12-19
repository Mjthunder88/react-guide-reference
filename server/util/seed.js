const {Product} = require('./models')


let allProducts = [
    {
        name: "Duck",
        price: 5.99,
        clearance: false
    },
    {
        name: "Basketball",
        price: 10.00,
        clearance: false
    },
    {
        name: "Cards",
        price: 6.32,
        clearance: false
    },
    {
        name: "Baloon",
        price: 3.24,
        clearance: true
    }
]

const seed = async () => {
    await Product.bulkCreate(allProducts)
}

module.exports = seed