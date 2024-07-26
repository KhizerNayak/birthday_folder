import './App.css';
import Envelope from './components/envelope';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Poem from './components/PoemSection';
import FlowerAnimation from './components/FlowerAnimation';

const App = () => {
  return (
     
          <Routes>
              <Route path="/" element={<Envelope />} />
              <Route path="/flower" element={<FlowerAnimation />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/poem/:id" element={<Poem />} />
              
          </Routes>
      
  );
};

export default App;
