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
import Login from './Componets/login.js'
import Register  from './Componets/Register';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Componets/Navbar';
import CreatePost from './Componets/CreatePost';
// import './styles/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create_offer" element={<CreatePost />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
