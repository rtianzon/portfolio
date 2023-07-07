const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    // res.render('home')
    res.send('okay from laundry')
    // res.render("dashboard1/home")
})

router.get('/emp', async (req, res) => {
    res.render("laundry/home")
})

module.exports = router