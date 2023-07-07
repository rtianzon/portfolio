const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.render("scheduling/html/home")
})

router.get('/scheduling3', async (req, res) => {
    res.render("scheduling3/home")
})

module.exports = router