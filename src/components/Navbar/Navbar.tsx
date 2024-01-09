// Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.scss'; // Assurez-vous d'importer le fichier de style

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
        <li><Link to="/parametres" className="nav-link">Paramètres</Link></li>
      </ul>
      <Link to="/login" className="nav-link login-link">Login</Link>
    </nav>
  );
}

export default Navbar;
