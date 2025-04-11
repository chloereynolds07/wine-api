const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/wines/rose'

    axios.get(url).then(resp => {
        res.render('pages/wines', {
            title: 'Rose Wines',
            name: 'velvet oak cellars',
            data: resp.data,
            path: 'rose-wines'
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/wines/rose/${id}`

    axios.get(url).then(resp => {

        const data = resp.data 

        res.render('pages/wineSingle', {
            title: 'rose-wine',
            name: 'velvet oak cellars',
            wine: data,
            path: 'rose-wines'
        })
    })
})

module.exports = router