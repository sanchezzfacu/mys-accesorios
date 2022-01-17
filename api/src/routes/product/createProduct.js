const router = require('express').Router();
const { Category, Product } = require('../../db')

router.post('/', async (req,res) => {
    let {
        product,
        quantity,
        price,
        category
    } = req.body

    let productCreated = await Product.create({
        product,
        quantity,
        price,
        category
    })
    productCreated()
    res.status(200).send('ok')
    // let categoryType = await Category.findAll({
    //     where : {name:category}
    // })
    
    // productCreated.addCategory(categoryType)
    // res.send('Producto creado satisfactoriamente')
})

module.exports = router;