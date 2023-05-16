
import './App.css';

import Navbar from './components/Navbar';
import HelloPage from './components/HelloPage';
import ContactMePage from './components/ContactMePage';
import Portfolio from './components/PortFolio';
import AboutPage from './components/AboutMe';
import Footer from './Footer';
import Resume from './components/Resume';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HelloPage/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<ContactMePage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
