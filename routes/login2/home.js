const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.render("login2/html/home")
})

module.exports = router