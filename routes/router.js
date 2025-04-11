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

const redWineRoutes = require('./api/redwineRoutes')
router.use('/red-wines', redWineRoutes)

module.exports = router