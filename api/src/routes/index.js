const { Router } = require('express');
// Importar todos los routers;
const productsRoute = require('./product')
const productCreate = require('./products')
const clientsRoute = require('./client')
const clientCreate = require('./clients')
const clientDetail = require('./clientDetail')

const router = Router();

// Endpoints para client
router.use('/client', clientsRoute)
router.use('/client-detail', clientCreate)
router.use('/client-create', productCreate )
router.use('/client-detail', clientDetail)

// Endpoints para product
router.use('/product', productsRoute)


module.exports = router;
    

