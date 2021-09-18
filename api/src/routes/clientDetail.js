const router = require('express').Router()
const { Client, Product } = require('../db')


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
};

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const info = await getInfo()
    if (id.length === 36) {
        const clientDetail = info.filter(el => el.id == id)
        clientDetail.length ? 
        res.status(200).send(clientDetail) :
        res.status(404).send('No existen detalles para este ID')
    } else {
        res.status(400).send('ID invalida')
    }
});

module.exports = router