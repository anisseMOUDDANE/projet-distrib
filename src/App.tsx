import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './pages/homeComponent/HomeComponent'
import LoginComponent from './pages/loginComponent/LoginComponent';
import DashboardComponent from './pages/dashBoard/DashboardComponent';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
