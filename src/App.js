import './App.css';
import Register from './Componets/Register';
import Navbar from './Componets/Navbar';
import Login from './Componets/login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='text-primary' style={{ marginTop: '100px'}}>Hello Home Made App</h1>
      <Register />
      <Login />
    </div>
  );
}
export default App;
