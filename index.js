import express from "express";

const app = express()
const port = 3000

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

const Posts = []

app.get('/', (req, res) => {
    res.render('index.ejs', {Posts})
})

app.get('/post', (req, res) => {
    console.log("Rendering Index. Posts:", Posts); // Debugging log
    res.render('posts.ejs')
})

app.post('/', (req, res) => {
    Posts.push({title: req.body['title'], message: req.body['message']})
    console.log("Updated Posts:", Posts); // Debugging log

    res.redirect('/')
})



app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
})