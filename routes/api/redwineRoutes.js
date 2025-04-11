const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/wines/reds'

    axios.get(url).then(resp => {
        res.render('pages/wines', {
            title: 'Red Wines',
            name: 'red wines',
            data: resp.data,
            path: 'red-wine'
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/wines/reds/${id}`

    axios.get(url).then(resp => {

        const data = resp.data 

        res.render('pages/wineSingle', {
            title: 'red-wine',
            name: 'red wine',
            wine: data,
            path: 'red-wine'
        })
    })
})

module.exports = router