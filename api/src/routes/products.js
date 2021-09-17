const router = require('express').Router();
const { Client, Product } = require('../db')

router.post('/', async (req,res) => {
    let {
        product,
        quantity,
        wholesalePrice,
        sellPrice
    } = req.body

    let productCreated = {
        product,
        quantity,
        wholesalePrice,
        sellPrice
    }
    productCreated.addClient
    res.send('Producto creado satisfactoriamente')
})

module.exports = router;