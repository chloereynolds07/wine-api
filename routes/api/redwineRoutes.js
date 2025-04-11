const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/wines/reds'

    axios.get(url).then(resp => {
        res.render('pages/wines', {
            title: 'Red Wines',
            name: 'velvet oak cellars',
            data: resp.data,
            path: 'red-wines'
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
            name: 'velvet oak cellars',
            wine: data,
            path: 'red-wines'
        })
    })
})

module.exports = router