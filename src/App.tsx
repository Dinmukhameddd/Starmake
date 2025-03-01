import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectionScreen from './pages/SelectionScreen';
import NextScreen from './pages/NextScreen';
import TemplatesScreen from './pages/TemplatesScreen';
import AIResponseScreen from './pages/AIResponseScreen';
import Scenario from './pages/Scenario';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectionScreen />} />
        <Route path="/next" element={<NextScreen />} />
        <Route path="/templates" element={<TemplatesScreen />} />
        <Route path="/ai-response" element={<AIResponseScreen />} />
        <Route path="/next" element={<Scenario />} />
      </Routes>
    </Router>
  );
};

export default App;
