  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import HomeComponent from './pages/homeComponent/HomeComponent'
  import LoginComponent from './pages/loginComponent/LoginComponent';
  import DashboardComponent from './pages/dashBoard/DashboardComponent';
  import Parametre from './pages/parametre/Parametre';
  import Navbar from './components/Navbar/Navbar';
  import './App.css';
  import { ChakraProvider } from '@chakra-ui/react'

  function App() {
    return (
      <ChakraProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
          <Route path="/" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/dashboard" element={<DashboardComponent />} />
            <Route path="/parametres" element={<Parametre />} /> 
          </Routes>
        </div>
      </Router>
      </ChakraProvider>
    );
  }

  export default App;
