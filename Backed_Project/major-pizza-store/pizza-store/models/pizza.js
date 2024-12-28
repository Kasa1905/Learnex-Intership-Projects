// models/PizzaItem.js
const mongoose = require('mongoose');

// Define a schema for pizza items
const pizzaItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String }
});

// Create the PizzaItem model using the schema
const Pizza = mongoose.model('PizzaItem', pizzaItemSchema);

module.exports = Pizza;
