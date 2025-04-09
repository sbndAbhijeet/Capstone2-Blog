import express, { Router } from "express";
import methodOverride from "method-override";

const app = express()
const port = 3000

// Set EJS as the view engine
app.set('view engine', 'ejs');



// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(methodOverride('_method'));

let posts = []
let time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + '\n' + new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })

app.get('/', (req, res) => {
    res.render('index.ejs', {posts})
})

app.get('/post', (req, res) => {
    console.log("Rendering Index. Posts:", posts); // Debugging log
    res.render('posts.ejs', { post: null })
})

app.post('/', (req, res) => {
    posts.push({
        id: Date.now().toString(),
        time: time,
        title: req.body['title'],
        message: req.body['message']
    })
    console.log("Updated Posts:", posts); // Debugging log

    res.redirect('/')
})

// edit form page
app.get('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id)
    if(!post) return res.status(404).send("Post not found")
    res.render('edit.ejs', { post: post })
})

//handle update
app.put('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if(!post) return res.status(404).send('Post not found')
    post.title = req.body.title
    post.message = req.body.message
    post.time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + '\n' + new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
    res.redirect('/')
})



app.delete('/delete/:id', (req, res) => {
    posts = posts.filter(p => p.id !== req.params.id)
    res.redirect('/')
})


app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
})