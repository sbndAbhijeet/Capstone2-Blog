# Blog Website using Express Capstone Project

 👋 Hey! there everybody this is a Simple Blog Website made with HTML, Bootstrap/CSS, Express and EJS Templating with a session based storage without any databases.

## Project Description
The goal of this project is to create a Blog web application using Node.js, Express.js, and EJS. The application will allow users to create and view blog posts. Posts will not persist between sessions as no database will be used in this version of the application. Styling will be an important aspect of this project to ensure a good user experience.



## Technical Requirements
1. Node.js & Express.js: The application will be a web server built using Node.js and Express.js. Express.js will handle routing and middleware.

2. EJS: EJS will be used as the templating engine to generate dynamic HTML based on the application's state.

## Features

1. Post Creation: Users should be able to create new posts.

2. Post Viewing: The home page should allow the user to view all their posts.

3. Post Update/Delete: Users should be edit and delete posts as needed.

3. Styling: The application should be well-styled and responsive, ensuring a good user experience on both desktop and mobile devices.


## Deliverables
One Node project for the function of the website

Including at least one EJS file for the structure of the website

Including at least one CSS file for the styling of the website

## Timeline

### Hour 0: Planning

    Gather content and design ideas, create wireframes and mockups. Plan out how the application will work, which routes might be necessary and which pages need to be made.


### Hour 1:  Setup

    Set up the project repository, initialize the Node.js application, and install necessary dependencies (Express.js, EJS).

    Create the application structure, including routes, views, and static files.

    Set up the Express.js server and define the necessary routes.



### Hour 2-3: Implementing Features

    Implement the post creation feature. This includes creating the form on the home page and handling the form submission in the server.

    Implement the post viewing feature. This includes displaying all the posts on the home page.

    Implement the post edit feature. This includes using a form to load the existing blog post and allowing the user to edit and save the post.

    Implement the delete feature. This allows the user to click a button and remove the post from the home page.

    Test the application to ensure that post creation and viewing are working correctly.



### Hour 4-5: Styling and Polishing

      Style the application. This includes creating a CSS file, linking it to your EJS templates, and writing CSS or using Bootstrap/Flexbox/Grid to style the application.

    Test the application on different devices and browsers to ensure the styling works correctly.

    Fix any bugs or issues that came up during testing.

## New Things I Learned


✅ 1.method-override Middleware in app.js?
You need this to make POST requests act like DELETE when the URL includes ?_method=DELETE.

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
This tells Express to check for _method in the query string or form and override the method accordingly.

app.delete('/delete/:id', (req, res) => {
    posts = posts.filter(p => p.id !== req.params.id)
    res.redirect('/')
})

<!-- <form action="/delete/<%= post.id %>?_method=DELETE" method="POST">
    <button class="delete btn btn-danger m-1">Delete</button>
</form> -->