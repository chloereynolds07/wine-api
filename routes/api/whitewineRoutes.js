const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/wines/whites'

    axios.get(url).then(resp => {
        res.render('pages/wines', {
            title: 'White Wines',
            name: 'velvet oak cellars',
            data: resp.data,
            path: 'white-wines'
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/wines/whites/${id}`

    axios.get(url).then(resp => {

        const data = resp.data 

        res.render('pages/wineSingle', {
            title: 'white-wine',
            name: 'velvet oak cellars',
            wine: data,
            path: 'white-wines'
        })
    })
})

module.exports = router