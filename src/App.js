import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import SingleTour from './components/pages/tour/SingleTour';
import Login from './components/pages/forms/Login';
import Register from './components/pages/forms/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/pages/about/About';

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tour/:id" element={<SingleTour />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
