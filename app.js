const express = require('express');
const app = express();
const path = require('path');

// Middleware for parsing JSON and serving static files
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sample books data
const books = [
    { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 10.99 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.99 },
    { id: 3, title: '1984', author: 'George Orwell', price: 15.99 },
];

// API endpoint to fetch books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
