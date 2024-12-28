const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Pizza = require('./models/pizza.js');



const app = express();
const port = 3000;
app.set('views engine', 'ejs');
// Set the views folder where EJS files are located
app.set('views', path.join(__dirname, 'views'));

// Use body-parser middleware to handle POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection (replace with your MongoDB connection string)
mongoose.connect('mongodb+srv://PizzaAdmin:085tSzR72Uc7nIns@cluster1.hvmjx.mongodb.net/',{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define routes

// GET route to display all pizza items
app.get('/items', async (req, res) => {
    try {
        const pizzas = await Pizza.find(); // Fetch all pizzas from MongoDB
        res.render('list', { pizzas }); // Render the list.ejs view and pass the pizzas data
    } catch (error) {
        res.status(500).send('Failed to retrieve pizzas');
    }
});

// POST route to add a new pizza item
app.post('/items', async (req, res) => {
    const { name, description, price, imageUrl } = req.body;
    
    try {
        const newPizza = new Pizza({ name, description, price, imageUrl });
        await newPizza.save(); // Save the new pizza to MongoDB
        res.status(201).redirect('/items'); // Redirect to the list of items after creation
    } catch (error) {
        res.status(500).send('Failed to add pizza');
    }
});

// GET route to display the form to add a new pizza item
app.get('/items/new', (req, res) => {
    res.render('new'); // Render the form for creating a new pizza (new.ejs)
});

// PUT route to update a pizza item (by ID)
app.put('/items/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, imageUrl } = req.body;

    try {
        const updatedPizza = await Pizza.findByIdAndUpdate(id, { name, description, price, imageUrl }, { new: true });
        res.status(200).json(updatedPizza); // Respond with the updated pizza
    } catch (error) {
        res.status(500).send('Failed to update pizza');
    }
});

// DELETE route to delete a pizza item (by ID)
app.delete('/items/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        await Pizza.findByIdAndDelete(id); // Delete the pizza by ID
        res.status(200).send('Pizza deleted'); // Send confirmation message
    } catch (error) {
        res.status(500).send('Failed to delete pizza');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
const methodOverride = require('method-override');

// Use method-override for PUT and DELETE methods
app.use(methodOverride('_method'));
