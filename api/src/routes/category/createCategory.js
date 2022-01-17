const router = require('express').Router();
const { Category, Product } = require('../../db')

router.post('/', async (req,res) => {
    let {
        category,
        img
    } = req.body

    let categoryCreated = await Category.create({
        category,
        img
    })
    
    res.send('Categoria creada satisfactoriamente')
})

module.exports = router;