import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InfinityAlmeng from './pages/InfinityAlmeng';
import BottleBottle from './pages/BottleBottle';
import Poolppurism from './pages/Poolppurism';
import DreamGarden from './pages/DreamGarden';
import Mangles from './pages/Mangles';
import OurDrama from './pages/OurDrama';
import Ramp from './pages/Ramp';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infinity-almeng" element={<InfinityAlmeng />} />
        <Route path="/bottle-bottle" element={<BottleBottle />} />
        <Route path="/poolppurism" element={<Poolppurism />} />
        <Route path="/dream-garden" element={<DreamGarden />} />
        <Route path="/mangles" element={<Mangles />} />
        <Route path="/our-drama" element={<OurDrama />} />
        <Route path="/ramp" element={<Ramp />} />
      </Routes>
    </Router>
  );
}

export default App;
