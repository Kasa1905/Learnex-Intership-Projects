// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Port to run the server
const port = 3000;

// Dummy data for pizza items (In-memory storage)
let pizzaItems = [
  { id: 1, name: 'Margherita', description: 'Classic cheese and tomato', price: 8.99 },
  { id: 2, name: 'Pepperoni', description: 'Pepperoni with mozzarella cheese', price: 9.99 },
];

// CRUD routes will be defined here...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Add a new pizza item
app.post('/items', (req, res) => {
       const { name, description, price } = req.body;
     
       if (!name || !description || !price) {
         return res.status(400).send('All fields (name, description, price) are required.');
       }
     
       const newItem = {
         id: pizzaItems.length + 1,  // ID is incremented for simplicity
         name,
         description,
         price
       };
     
       pizzaItems.push(newItem);
       res.status(201).json(newItem);  // Return the newly created pizza item
});
     // Get all pizza items
app.get('/items', (req, res) => {
       res.status(200).json(pizzaItems);
});
// Get a pizza item by ID
app.get('/items/:id', (req, res) => {
       const itemId = parseInt(req.params.id, 10);
       const item = pizzaItems.find(i => i.id === itemId);
     
       if (!item) {
         return res.status(404).send('Pizza item not found.');
       }
     
       res.status(200).json(item);
});
 // Update a pizza item by ID
app.put('/items/:id', (req, res) => {
       const itemId = parseInt(req.params.id, 10);
       const { name, description, price } = req.body;
     
       const item = pizzaItems.find(i => i.id === itemId);
     
       if (!item) {
         return res.status(404).send('Pizza item not found.');
       }
     
       if (name) item.name = name;
       if (description) item.description = description;
       if (price) item.price = price;
     
       res.status(200).json(item);
});
// Delete a pizza item by ID
app.delete('/items/:id', (req, res) => {
       const itemId = parseInt(req.params.id, 10);
       const index = pizzaItems.findIndex(i => i.id === itemId);
     
       if (index === -1) {
         return res.status(404).send('Pizza item not found.');
       }
     
       pizzaItems.splice(index, 1);  // Remove the item from the array
       res.status(204).send();  // No content, successful deletion
});
     