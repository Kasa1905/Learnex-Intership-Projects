import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAllItems = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/pizzas')
      .then(response => setPizzas(response.data))
      .catch(error => console.error('Error fetching pizzas!', error));
  }, []);

  return (
    <div className="container">
      <h1>All Pizzas</h1>
      <ul className="list-group">
        {pizzas.map(pizza => (
          <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{pizza.name} - ${pizza.price}</span>
            <div>
              <Link to={`/update/${pizza.id}`} className="btn btn-warning btn-sm mx-1">Edit</Link>
              <Link to={`/delete/${pizza.id}`} className="btn btn-danger btn-sm">Delete</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayAllItems;
