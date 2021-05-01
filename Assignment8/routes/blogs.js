const express = require('express')
const router = express.Router()

const Blog = require('../models/blogs')
const Review = require('../models/review')

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find({})
        res.render('home', { blogs })
    }
    catch(e) {
        req.flash('error', 'Something went wrong')
        res.redirect('/')
    }
})

router.post('/', async (req, res) => {
    try {
        await Blog.create(req.body.blog)
        req.flash('success', 'New blog added')
    }
    catch(e) {
        req.flash('error', 'Something went wrong,Not able to create new blog')
    }
    res.redirect('/')
})

router.get('/new', (req, res) => {
    res.render('new')
})

router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('reviews')
        res.render('show', { blog })
    }
    catch(e) {
        req.flash('error', 'Not able to find this blog')
        res.redirect('/')
    }
})

router.get('/:id/edit', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        res.render('edit', { blog })
    }
    catch(e) {
        req.flash('error', 'Not able to find this blog')
        res.redirect('/')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        await Blog.findByIdAndUpdate(req.params.id, req.body.blog)
        req.flash('success', 'Blog edited successfully!!')
    }
    catch(e) {
        req.flash('error', 'Not able to update blog')
    }
    res.redirect(`/${req.params.id}`)
})

router.delete('/:id/delete', async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id)
        req.flash('success', 'Blog deleted successfully.')
    }
    catch(e) {
        req.flash('error', 'Something went wrong, not able to delete blog')
    }
    res.redirect('/');
})

router.post('/:id/review', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        const review = new Review(req.body.review);
        blog.reviews.push(review)
        await review.save()
        await blog.save()
        req.flash('success', 'Review successfully added')
        res.redirect(`/${req.params.id}`)
    }
    catch(e) {
        req.flash('error', 'Something went wrong, not able to add review')
        res.redirect('/')
    }
})

module.exports = router;