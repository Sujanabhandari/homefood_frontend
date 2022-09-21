import './App.css';
import Register from './Componets/Register';
import Navbar from './Componets/Navbar';
import Login from './Componets/login';
import Footer from './Componets/Footer';
import CreatePost from './Componets/CreatePost';
import Home from './Componets/home';
import OrderHistory from './Componets/OrderHistory';
import OfferPreview from './Componets/OfferPreview';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
export default App;
