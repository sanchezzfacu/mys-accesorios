const router = require('express').Router();
const { Product, Client } = require('../db')

const getInfo = async () => {
    return await Client.findAll({
        include: {
            model: Product,
            attributes: ['product'],
            through: {
                attributes: []
            }
        }
    })
}


router.get('/', async (req,res) => {
    const { name } = req.query;
    let info = await getInfo()
        if(name){
            let client = await info.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            client.length ? 
            res.status(200).send(client) :
            res.status(404).send('Cliente no encontrado')
        } else {
            res.status(200).send(info)
        }
})

module.exports = router