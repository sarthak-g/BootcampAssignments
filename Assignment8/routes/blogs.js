const express = require('express')
const router = express.Router()
const Blog = require('../models/blogs')

router.get('/', async (req, res) => {
    const blogs = await Blog.find({})
    res.render('home', {blogs})
})

module.exports = router;