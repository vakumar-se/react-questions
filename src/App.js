import './App.css';
import { Routes, Route, Links } from 'react-router-dom';
import Home from './Pages/Home';
import OtpComp from './components/OtpComp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/otp" exact element={OtpComp} />
    </Routes>
  );
}

export default App;
