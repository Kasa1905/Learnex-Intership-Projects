# Pizza Store CRUD Application

This is an Express application to perform CRUD (Create, Read, Update, Delete) operations on pizza store items. The project uses MongoDB for database management and EJS templates for rendering views.

## Features

- Add new pizza items to the store
- View all pizzas in the store
- Update pizza details
- Delete pizza items

## Technologies Used

- **Node.js** and **Express** for building the server
- **MongoDB** for the database (using Mongoose)
- **EJS** for rendering views
- **Postman** for testing the API endpoints

## Installation

### Prerequisites

- Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).
- Have MongoDB set up (locally or using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/pizza-store.git
    ```

2. Navigate into the project directory:
    ```bash
    cd pizza-store
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Set up MongoDB:
    - If using a local MongoDB server, make sure MongoDB is running.
    - If using MongoDB Atlas, update the connection string in the `app.js` file.

5. Run the server:
    ```bash
    npm start
    ```

6. Visit `http://localhost:3000` in your browser.

## API Endpoints

- **POST /items** - Add a new pizza item
  - Request body: 
    ```json
    {
      "name": "Margherita",
      "description": "Classic pizza with tomatoes and mozzarella",
      "price": 12.99,
      "ingredients": ["tomato", "mozzarella", "basil"]
    }
    ```

- **GET /items** - Get all pizza items

- **GET /items/:id** - Get a specific pizza by ID

- **PUT /items/:id** - Update a pizza item by ID
  - Request body: 
    ```json
    {
      "name": "Updated Margherita",
      "description": "Updated description",
      "price": 15.99,
      "ingredients": ["tomato", "mozzarella", "basil", "cheese"]
    }
    ```

- **DELETE /items/:id** - Delete a pizza item by ID

## Postman Collection

A Postman collection file (`postman_collection.json`) is included for testing the API endpoints. You can import this collection into Postman and use it to test each of the routes.

## License

This project is open-source and available under the [MIT License](LICENSE).
