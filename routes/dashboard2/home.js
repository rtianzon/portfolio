const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    // res.render('home')
    // res.send('okay from dashboard2')
    res.render("dashboard2/home")
})

module.exports = router