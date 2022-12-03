import './App.css';
import Login from './Componets/SignIn.js'
import Home from './Componets/HomePage.js';
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
import Footer from './Componets/Footer'
import GlobalLayout from './Componets/GlobalLayout';
import { Routes, Route } from "react-router-dom";
import ProtectedLayout from './Componets/ProtectedLayout';
import 'bootstrap/dist/js/bootstrap.bundle';
import OffferHistoryDetails from './Componets/OfferHistoryDetails';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RatingCreator from './Componets/RatingCreator';
import { useHomeContext } from './Componets/MainContext';
import PacmanLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  position: "fixed",
  top: "50%",
  left: "50%",
  borderWidth: "3px"
};

function App() {

  const { setUser, setToken, isAuthenticated, setIsAuthenticated, posts, loading } = useHomeContext();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setToken(null);
    setUser(null);
    navigate('/', { replace: true });
  };

  return (
    <>
    <ToastContainer limit={5} />
      <Navbar isAuthenticated={isAuthenticated}
        setToken={setToken} logout={logout} />

      <Routes>
        <Route path="/" element={<GlobalLayout />} >
          <Route index element={<Home posts={posts} />} />
          <Route path="/offers/:id" element={<SinglePost posts={posts} />} />
          <Route path="/offers/:id/order" element={<OrderFood posts={posts} />} />

          <Route path="/create_offer" element={<CreatePost />} />

          <Route path="/my_account" element={<MyAccount isAuthenticated={isAuthenticated}
            setToken={setToken} />} />
          <Route path="/my_account/order_history" element={<OrderHistory />} />
          <Route path="/my_account/offer_history" element={<OfferHistory posts={posts} />} />
          <Route path="/my_account/orders_received" element={<OrdersReceived />} />

          <Route path="/order_history/rating_creator" element={<RatingCreator />} />
          <Route path="/order_history/rating_creator/:id" element={<RatingCreator />} />
          <Route path='secret' element={<ProtectedLayout isAuthenticated={isAuthenticated} />}>
          </Route>
          <Route path="/offer_preview" element={<OfferPreview />} />
          <Route path="/my_account/offer_history/:id" element={<OffferHistoryDetails posts={posts} />} />
          <Route path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setToken={setToken} />} />
          <Route path="/register" element={<Register isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setToken={setToken} />} />

        </Route>
      </Routes>
      <PacmanLoader
        color={"#e8dd61"}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <Footer />
    </>
  );
}
export default App;
