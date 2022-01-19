const router = require('express').Router();
const { Category, Product } = require('../../db')

router.post('/', async (req,res) => {
    let {
        product,
        img,
        description,
        quantity,
        price,
        category
    } = req.body

    let productCreated = await Product.create({
        product,
        img,
        description,
        quantity,
        price,
        category
    })
    try {
        res.status(200).send('Producto creado')
    } 

    catch {
        res.status(400).send('Error')
    }
    // let categoryType = await Category.findAll({
    //     where : {name:category}
    // })
    
    // productCreated.addCategory(categoryType)
    // res.send('Producto creado satisfactoriamente')
})

module.exports = router;