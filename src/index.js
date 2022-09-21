import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import './index.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import './_variables.scss';
import './styles.scss';

import App from './App';
<<<<<<< HEAD
import Login from './Componets/login.js'
import Home from './Componets/home.js';
import OrderHistory from './Componets/OrderHistory.js';
import OfferPreview from './Componets/OfferPreview.js';
import Register  from './Componets/Register';
=======
>>>>>>> dc2d27e (Get all offers from backend)
import 'bootstrap-icons/font/bootstrap-icons.css';
// import './styles/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create_offer" element={<CreatePost />} />
      <Route path="/order_history" element={<OrderHistory />} />
      <Route path="/offer_preview" element={<OfferPreview />} />
    </Routes>
=======
    <App />
>>>>>>> dc2d27e (Get all offers from backend)
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
