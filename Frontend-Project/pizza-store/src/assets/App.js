import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import DisplayAllItems from './components/DisplayAllItems';
import AddNewItem from './components/AddNewItem';
import UpdateItem from './components/UpdateItem';
import DeleteItem from './components/DeleteItem';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/display" component={DisplayAllItems} />
          <Route path="/add" component={AddNewItem} />
          <Route path="/update/:id" component={UpdateItem} />
          <Route path="/delete/:id" component={DeleteItem} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
