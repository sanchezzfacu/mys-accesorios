const { Router } = require('express');
// Importar todos los routers;
const productsRoute = require('./product')
const productCreate = require('./products')
const clientsRoute = require('./client')
const clientCreate = require('./clients')

const router = Router();

// Configurar los routers
router.use('/client', clientsRoute)
router.use('/product', productsRoute)
router.use('/create-client', clientCreate)
router.use('/create-product', productCreate )

module.exports = router
    

