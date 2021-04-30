const express = require('express')
const router = express.Router()

const Blog = require('../models/blogs')
const Review = require('../models/review')

router.get('/', async (req, res) => {
    const blogs = await Blog.find({})
    res.render('home', {blogs})
})

router.post('/', async (req, res) => {
    await Blog.create(req.body.blog)
    res.redirect('/')
})

router.get('/new', (req, res) => {
    res.render('new')
})

router.get('/:id', async (req, res) => {
    const blog = await Blog.findById(req.params.id).populate('reviews')
    res.render('show', {blog})
})

router.get('/:id/edit', async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    res.render('edit', {blog})
})

router.patch('/:id', async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.id, req.body.blog)
    res.redirect(`/${req.params.id}`)
})

router.delete('/:id/delete', async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id)
    res.redirect('/');
})

router.post('/:id/review', async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    const review = new Review(req.body.review);
    blog.reviews.push(review)
    await review.save()
    await blog.save()
    res.redirect(`/${req.params.id}`)
})

module.exports = router;