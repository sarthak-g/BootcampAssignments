const mongoose = require('mongoose')
const Blog = require('./models/blogs')

const blogs_data = [
    {
        title: 'The Gift Of The Present Moment Is Inner Peace',
        author: 'Maria Erving',
        img_url: 'https://images.unsplash.com/photo-1491439833076-514a03b24a15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        desc: 'We can’t find peace by escaping from human pain and suffering, but you can find peace in the midst of your pain, and the present moment is the medicine that relieves you from mental and emotional suffering. As we stay centered in the present moment we can watch life unfold around us without having our minds freak out by the slightest disturbance it experiences. When we come into this moment there really are no problems, but what happens is that the more stillness that is introduced, the louder the ego voice gets, all in an attempt to pull you away from this moment.'
    },
    {
        title: 'This Is How Reading Rewires Your Brain, According to Neuroscience',
        author: 'Jessica Stillman',
        img_url: 'https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'We all know reading can teach you facts, and knowing the right thing at the right time helps you be more successful. But is that the entire reason just about every smart, accomplished person you can think of, from Bill Gates to Barack Obama, credits much of their success to their obsessive reading? Not according to neuroscience.Reading, science shows, doesn’t just fill your brain with information; it actually changes the way your brain works for the better as well.'
    },
    {
        title: 'A CTO’s guide to a modern tech stack',
        author: 'Nitin Aggarwal',
        img_url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        desc: 'With the advent of DevOps and “you build it, you own it”, the tech stack has evolved a lot for the modern startup. There are hundreds of dev tools launched in the last decade which have completely changed how developers manage their workloads. Recently, We evaluated this landscape very thoroughly at RunX and here is our opinionated guide.'
    },

]

async function seedDB() {
    await Blog.insertMany(blogs_data)
    console.log('DB SEEDED!!')
}

module.exports = seedDB;