import './App.css';
import Login from './Componets/login.js'
import Home from './Componets/home.js';
import OrderHistory from './Componets/OrderHistory.js';
import OfferHistory from './Componets/OfferHistory.js';
import Register from './Componets/Register';
import Navbar from './Componets/Navbar';
import CreatePost from './Componets/CreatePost';
import OfferPreview from './Componets/OfferPreview';
import OrdersReceived from './Componets/OrdersReceived';
import MyAccount from './Componets/MyAccount';
import SinglePost from './Componets/SinglePost';
import OrderFood from './Componets/OrderFood';
import NoItems from './Componets/NoItems';
import Footer from './Componets/Footer'
import { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalLayout from './Componets/GlobalLayout';
import { NavLink, Routes, Route, Link } from "react-router-dom";
import { getUser } from "./utils/regitsterUser";
import ProtectedLayout from './Componets/ProtectedLayout';
import 'bootstrap/dist/js/bootstrap.bundle';
import OffferHistoryDetails from './Componets/OfferHistoryDetails';
import Component404 from './Componets/Component404';
// import Categories from './Componets/Categories';

import RatingCreator from './Componets/RatingCreator';

import { useHomeContext } from './Componets/MainContext';

function App() {
  // const [posts, setPosts] = useState([]);

  const { user, setUser, token, setToken, isAuthenticated, setIsAuthenticated, posts, setPosts } = useHomeContext();

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setToken(null);
    setUser(null);
    // setRegisterFormState(null);
  };

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated}
        setToken={setToken} logout={logout} />

      <Routes>
        <Route path="/" element={<GlobalLayout />} >
          <Route index element={<Home posts={posts} />} />
          <Route path="/offers/:id" element={<SinglePost posts={posts} />} />
          <Route path="/offers/:id/order" element={<OrderFood posts={posts} />} />

          {/* <Route path="/offers/category_name" element={<Home posts={posts} />} /> */}

          <Route path="/create_offer" element={<CreatePost />} />

          <Route path="/my_account" element={<MyAccount isAuthenticated={isAuthenticated}
            setToken={setToken} />} />

          <Route path="/my_account/order_history" element={<OrderHistory />} />
          <Route path="/my_account/offer_history" element={<OfferHistory posts={posts}/>} />
          <Route path="/my_account/orders_received" element={<OrdersReceived />} />

          <Route path="/order_history/rating_creator" element={<RatingCreator />} />
          <Route path="/order_history/rating_creator/:id" element={<RatingCreator />} />

          <Route path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setToken={setToken} />} />

          <Route path="/register" element={<Register isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setToken={setToken} />} />
          <Route path='secret' element={<ProtectedLayout isAuthenticated={isAuthenticated} />}>

          </Route>

          <Route path="/offer_preview" element={<OfferPreview />} />

          <Route path="*" element={<Component404 />} />
      
        </Route>
      </Routes>

      <Footer />
    </>
  );
}
export default App;
