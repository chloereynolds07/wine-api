const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/wines/sparkling'

    axios.get(url).then(resp => {
        res.render('pages/wines', {
            title: 'Sparkling Wines',
            name: 'sparkling wines',
            data: resp.data,
            path: 'sparkling-wines'
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/wines/sparkling/${id}`

    axios.get(url).then(resp => {

        const data = resp.data 

        res.render('pages/wineSingle', {
            title: 'sparkling-wine',
            name: 'sparkling wine',
            wine: data,
            path: 'sparkling-wines'
        })
    })
})

module.exports = router