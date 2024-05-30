import React from 'react';
import { HashRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarItem from './components/NavbarItem/NavbarItem';
function App() {
  return (
    <Router basename="/new">
      <NavbarItem/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
