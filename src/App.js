import './App.css';
import Login from './Componets/login.js'
import Home from './Componets/home.js';
import OrderHistory from './Componets/OrderHistory.js';
import Register from './Componets/Register';
import Navbar from './Componets/Navbar';
import CreatePost from './Componets/CreatePost';
import OfferPreview from './Componets/OfferPreview';
import SinglePost from './Componets/SinglePost';
import Footer from './Componets/Footer'
import { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalLayout from './Componets/GlobalLayout';
import { NavLink, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getUser } from "./utils/regitsterUser";
import ProtectedLayout from './Componets/ProtectedLayout';

import MainContext from './Componets/MainContext';

function App() {
  const [posts, setPosts] = useState([]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  //validate Token
  useEffect(() => {
    const validateToken = async () => {
      try {
        const { data, error } = await getUser(token);
        if (error) {
          throw new Error(error.response?.data.error || error.message);
        }
        setUser(data);
        setIsAuthenticated(true);
      } catch (error) {
        // toast.error("Invalid session, please login again");
        console.log(error)
        // localStorage.removeItem("token");
        // setToken(null);
      }
    };
    token && validateToken();
  }, [token]);


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
  };

  return (
    <div>
      {/* 

      1.Use context and wrap all the component and each child will all have. */}
      
      <Navbar isAuthenticated={isAuthenticated}
        setToken={setToken} logout={logout} />

      <Routes>
        <Route path="/" element={<GlobalLayout />} >
          <Route index element={<Home posts={posts} />} />
          <Route path="/:id" element={<SinglePost posts={posts} />} />
          <Route path="/create_offer" element={<CreatePost />} />
          <Route path="/order_history" element={<OrderHistory />} />

          <Route path="/login" element={<Login
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            setToken={setToken} />} />

          <Route path="/register"
            element={<Register
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              setToken={setToken} />} />
          <Route path='secret' element={<ProtectedLayout isAuthenticated={isAuthenticated} />}>


          </Route><Route path="/offer_preview" element={<OfferPreview />} />
        </Route>
      </Routes>
      <Footer />
    
    </div>
  );
}
export default App;
