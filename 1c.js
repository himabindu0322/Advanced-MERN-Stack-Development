const express = require('express');
const app = express();
const PORT = 4000;
// Middleware to parse JSON
app.use(express.json());

// Global Logging Middleware
app.use((req, res, next) => {
    console.log('Incoming:', req.method, req.url);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome, this is the Root Page!');
});

// firstHandler Middleware
const firstHandler = (req, res, next) => {
    if (10 < 20) {
        next();
    } else {
        res.status(403).send('Blocked by firstHandler middleware (10 is not > 20)');
    }
};

// ROOT ROUTE -> FIX for "Cannot GET /"
app.get('/', (req, res) => {
    res.send('Welcome to the Root Page!');
});

// Route: /home
app.get('/home', firstHandler, (req, res) => {
    res.send('Hello, I am Home Page');
});

// Route: /about
app.get('/about', (req, res) => {
    res.send('Welcome to the About Page');
});

// Dynamic Route: /home/:id
app.get('/home/:id', (req, res) => {
    res.send(`Initiating search for ${req.params.id}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});