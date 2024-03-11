import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import ProgramPage from './pages/Program/ProgramPage';
import ControlPage from './pages/Control/ControlPage';
import MixturePage from './pages/Mixture/MixturePage';
import LightPage from './pages/Light/LightPage';
import TemperaturePage from './pages/Temperature/TemperaturePage';
import HumidityPage from './pages/Humidity/HumidityPage';
import WateringPage from './pages/Watering/WateringPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/program' element={<ProgramPage />}/>
          <Route path='/control' element={<ControlPage />}/>
          <Route path='/temperature' element={<TemperaturePage />}/>
          <Route path='/humidity' element={<HumidityPage />}/>
          <Route path='/mixture' element={<MixturePage />}/>
          <Route path='/watering' element={<WateringPage />}/>
          <Route path='/light' element={<LightPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;