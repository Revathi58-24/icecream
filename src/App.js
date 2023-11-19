import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Ice from './components/Ice';
import Cake1 from './components/Cake1';
import Cake from './components/Cake';
import Kone from './components/Kone';
import Bliss from './components/Bliss';
import Payment from './components/Payment';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ice" element={<Ice />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/cake1" element={<Cake1 />} />
        <Route path="/kone" element={<Kone />} />
        <Route path="/bliss" element={<Bliss />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
