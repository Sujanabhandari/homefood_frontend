import './App.css';
import Login from './Componets/login.js'
import Home from './Componets/home.js';
import OrderHistory from './Componets/OrderHistory.js';
import Register from './Componets/Register';
import Navbar from './Componets/Navbar';
import CreatePost from './Componets/CreatePost';
import OfferPreview from './Componets/OfferPreview';
import SinglePost from './Componets/SinglePost';
import OrderFood from './Componets/OrderFood';
import Footer from './Componets/Footer'
import { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalLayout from './Componets/GlobalLayout';
import { NavLink, Routes, Route, Link } from "react-router-dom";
import { getUser } from "./utils/regitsterUser";
import ProtectedLayout from './Componets/ProtectedLayout';

import { useHomeContext } from './Componets/MainContext';

function App() {
  const [posts, setPosts] = useState(2);

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {user, setUser,token, setToken, isAuthenticated, setIsAuthenticated }  = useHomeContext();

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


  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setToken(null);
    setUser(null);
    // setRegisterFormState(null);
  };

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated}
        setToken={setToken} logout={logout} />

      <Routes>
        <Route path="/" element={<GlobalLayout />} >
          <Route index element={<Home posts={posts} />} />
          <Route path="/:id" element={<SinglePost posts={posts} />} />
          <Route path="/:id/order" element={<OrderFood posts={posts} />} />

          <Route path="/create_offer" element={<CreatePost />} />
          <Route path="/order_history" element={<OrderHistory />} />

          <Route path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setToken={setToken} />} />

          <Route path="/register" element={<Register isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setToken={setToken} />} />
          <Route path='secret' element={<ProtectedLayout isAuthenticated={isAuthenticated} />}>

          </Route>

          <Route path="/offer_preview" element={<OfferPreview />} />
        </Route>
      </Routes>
      <Footer />

    </div>
  );
}
export default App;
