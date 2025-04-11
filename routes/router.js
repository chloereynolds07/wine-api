const express = require('express')
const axios = require('axios')
const router = express.Router()

router.use(express.static('public'))

router.get('/', (req, res)=> {

    res.render('pages/home', {
        title: 'Wines',
        name: 'velvet oak cellars'
    })
})

const redwineRoutes = require('./api/redwineRoutes')
router.use('/red-wines', redwineRoutes)

const whitewineRoutes = require('./api/whitewineRoutes')
router.use('/white-wines', whitewineRoutes)

const sparklingwineRoutes = require('./api/sparklingwineRoutes')
router.use('/sparkling-wines', sparklingwineRoutes)

const rosewineRoutes = require('./api/rosewineRoutes')
router.use('/rose-wines', rosewineRoutes)

const dessertwineRoutes = require('./api/dessertwineRoutes')
router.use('/dessert-wines', dessertwineRoutes)

const portRoutes = require('./api/portRoutes')
router.use('/port-wines', portRoutes)

module.exports = router