import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">To-Do List</Link>
            </li>
            <li>
              <Link to="/cart">Shopping Cart</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route expect path='/' element={<Home/>}/>
            <Route expect path='/todo' element={<TodoList/>}/>
            <Route expect path='/cart' element={<ShoppingCart/>}/>
            <Route expect path='/about' element={<About/>}/>
            <Route expect path='/contact' element={<Contact/>}/>
          </Routes>
      </div>
    </Router>
  );
};

export default App;

