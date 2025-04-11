const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/wines/dessert'

    axios.get(url).then(resp => {
        res.render('pages/wines', {
            title: 'Dessert Wines',
            name: 'dessert wines',
            data: resp.data,
            path: 'dessert-wines'
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/wines/dessert/${id}`

    axios.get(url).then(resp => {

        const data = resp.data 

        res.render('pages/wineSingle', {
            title: 'dessert-wine',
            name: 'dessert wine',
            wine: data,
            path: 'dessert-wines'
        })
    })
})

module.exports = router