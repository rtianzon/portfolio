const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.render("scheduling2/html/home")
})

router.get('/daterange', async (req, res) => {
    res.render("scheduling2/html/daterange")
})

module.exports = router