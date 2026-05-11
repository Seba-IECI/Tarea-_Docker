import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import JugadoresActuales from './pages/JugadoresActuales/JugadoresActuales';
import JugadoresHistoricos from './pages/JugadoresHistoricos/JugadoresHistoricos';
import Logros from './pages/Logros/Logros';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app" id="app-root">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jugadores-actuales" element={<JugadoresActuales />} />
            <Route path="/jugadores-historicos" element={<JugadoresHistoricos />} />
            <Route path="/logros" element={<Logros />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
