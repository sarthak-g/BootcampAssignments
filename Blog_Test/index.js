const express = require('express')
const app = express()
const path = require('path')
const { v4: uuid } = require('uuid')
const methodOverride = require('method-override');

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/views'))
app.use(methodOverride('_method'));

const blogs = [
    {
        id: uuid(),
        title: 'Information about Taj mahal',
        img_url: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        author: 'Archna Jha',
        text: 'Taj Mahal is a most attractive and popular scenery look historical place. It is located in the Agra, Uttar Pradesh. It is situated in very large area at very beautiful place having river on back side. It looks like natural scenery. It looks like a heaven on the earth. It is built using white marble. It attracts people’s mind from all over the world to see every year like a love at first sight. Taj Mahal is the symbol of the eternal love of the Shah Jahan who had built this in the memory of her wife Mumtaz Mahal. Taj Mahal is counted as one of the Seven Wonders of this World. It is the burial place (mausoleum) of the great Empress Mumtaz Mahal.',
    },
    {
        id: uuid(),
        title: 'Benefits of healthy food',
        img_url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        author: 'Sarthak Gupta',
        text: 'Healthy food does not have merely one but numerous benefits. It helps us in various spheres of life. Healthy food does not only impact our physical health but mental health too.When we intake healthy fruits and vegetables that are full of nutrients, we reduce the chances of diseases. For instance, green vegetables help us to maintain strength and vigor. In addition, certain healthy food items keep away long-term illnesses like diabetes and blood pressure.Similarly, obesity is the biggest problems our country is facing now. People are falling prey to obesity faster than expected. However, this can still be controlled. Obese people usually indulge in a lot of junk food. The junk food contains sugar, salt fats and more which contribute to obesity. Healthy food can help you get rid of all this as it does not contain harmful things.'
    }
]

app.get('/', (req, res) => {
    return res.render('home', {blogs})
})

app.get('/:id/edit', (req, res) => {
    const {id} = req.params;
    const blog = blogs.find(b => b.id === id)
    return res.render('edit', {blog})
})

app.patch('/:id/edit', (req, res) => {
    const { id } = req.params;
    let blog = blogs.find(b => b.id === id)
    blog.title = req.body.title
    blog.img_url = req.body.imageUrl
    blog.text = req.body.text
    return res.redirect('/')
})

app.delete('/:id/delete', (req, res) => {
    const { id } = req.params;
    const blog = blogs.find(b => b.id === id)
    blogs.splice(blogs.indexOf(blog),1)
    return res.redirect('/')
})

app.get('/new', (req, res) => {
    return res.render('newBlog')
})

app.post('/new', (req, res) => {
    let newBlog = {}
    newBlog.id = uuid()
    newBlog.title = req.body.title
    newBlog.img_url = req.body.imageUrl
    newBlog.author = req.body.author
    newBlog.text = req.body.text
    blogs.push(newBlog)
    return res.redirect('/')
})

app.listen(3000, () => {
    console.log("Server started at port 3000")
})