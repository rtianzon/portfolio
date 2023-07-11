const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    // res.render('home')
    res.send('okay from super admin')
    // res.render("dashboard1/home")
})

router.get('/home', async (req, res) => {
    res.render("superAdmin/home")
})

module.exports = router