import './App.css';
// import Login from './Componets/login.js'
import Home from './Componets/home.js';
import OrderHistory from './Componets/OrderHistory.js';
// import Register from './Componets/Register';
import Navbar from './Componets/Navbar';
import CreatePost from './Componets/CreatePost';
import OfferPreview from './Componets/OfferPreview';
import Footer from './Componets/Footer'
import { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalLayout from './Componets/GlobalLayout';
import { NavLink, Routes, Route, Link } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/offers`);
        setPosts(data);
      } catch (error) {
        console.log(error)
      }
    };
    getPosts();
  }, []);
  // console.log(posts);

  return (
    <div>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<GlobalLayout />} >
            <Route index element={<Home posts={posts}/>} />
            <Route
            path="login"
            element={
              <Navbar
              />
            }
          />
            <Route path="/create_offer" element={<CreatePost />} />
            <Route path="/order_history" element={<OrderHistory />} />
            <Route path="/offer_preview" element={<OfferPreview />} />
          </Route>
        </Routes>
        <Footer />
    </div>
  );
}
export default App;
