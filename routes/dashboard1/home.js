const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.render("dashboard1/home")
})

module.exports = router