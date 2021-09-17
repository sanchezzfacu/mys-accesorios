const router = require('express').Router();
const { Client, Product } = require('../db')

router.post('/', async (req, res) => {
    let {
        name,
        phone,
        buyDay,
        quantityBuy,
        totalSpent,
        product
    } = req.body

    let clientCreated = await Client.create({
        name,
        phone,
        buyDay,
        quantityBuy,
        totalSpent,
    })

    let productDb = await Product.findAll({
        where: {product: product}
    })

    clientCreated.addProduct(productDb)
    res.send('Cliente creado satisfactoriamente')
})

module.exports = router