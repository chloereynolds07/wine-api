const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/wines/port'

    axios.get(url).then(resp => {
        res.render('pages/wines', {
            title: 'Port Wines',
            name: 'velvet oak cellars',
            data: resp.data,
            path: 'port-wines'
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/wines/port/${id}`

    axios.get(url).then(resp => {

        const data = resp.data 

        res.render('pages/wineSingle', {
            title: 'port-wine',
            name: 'velvet oak cellars',
            wine: data,
            path: 'port-wines'
        })
    })
})

module.exports = router