const express = require('express'); // Require express
const app = express(); // Call express app
const path = require('path'); // Require path
const { v4: uuid } = require('uuid'); // Destructure uuid v4. ( It's our choice to put whatever in the place  of uuid )
const methodOverride = require('method-override'); // method-override to allow us to use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.

app.use(express.urlencoded({ extended: true }));
// For parsing application/x-www-form-urlencoded
app.use(express.json());
// Built-in middleware function. It parses incoming requests wuth JSON payloads.
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuid(), // Generate a unique ID for each comment using uuid
        username: 'Teddy',
        comment: 'Haha, that looks fun!'
    },
    {
        id: uuid(),
        username: "Bella",
        comment: "Awh, that's so cool!"
    },
    {
        id: uuid(),
        username: "EddieBoi22",
        comment: "Whoa! that looks Dangerous!"
    },
    {
        id: uuid(), 
        username: "PrettyGirl123",
        comment: "I wanna go there."
    }
]; // An array of Comments

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
}); // For Reading the Comments

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
}); // Form to create New comments

app.post('/comments', (req, res) => {
    const { username, comment } = req.body // Destructure/Extract req.body
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments');
}); // Creating comments and pushing in the comments array

app.get('/comments/:id', (req, res) => {
    const { id } = req.params; // Extracts 'id' from request parameters and allows us to use a new name by destructuring.
    const comment = comments.find(c => c.id === id); // Find the comment with the matching 'id'
    res.render('comments/show', { comment }); // Render the 'show' template with the comment
}); // Route for displaying a specific comment by its ID

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment } );
}); // Route for rendering the edit form for a specific comment by its ID


// Route for updating a specific comment by its ID
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params; // Extract the comment ID from the route parameters
    const newCommentText = req.body.comment; // Get the new comment text from the request body
    const foundComment = comments.find(c => c.id === id); // Find the comment object in the 'comments' array that matches the given ID
    foundComment.comment = newCommentText; // Update the comment text of the found comment
    res.redirect('/comments'); // Redirect the user to the comments page
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id); // Reassigned/Updated comments var to be filtered out into a new array based upon the old version of comments.
    res.redirect('/comments');
}); // It's a good practice to not mutate an array.

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
}); // For testing purposes

app.post('/tacos',(req, res) => {
    const {meat, qty} = req.body;
    res.send(`Here are your ${qty} ${meat} Tacos!`);
}); // For testing purposes

app.listen(3000, () => {
    console.log("Listening to Port 3000");
}); // Server is listening on port 3000