import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'; // Assurez-vous d'importer le fichier de style

function Navbar() { 
  // Utilisez useState pour gérer l'état du login
  const [isLog, setIsLog] = useState(!!+(sessionStorage.getItem('log') || 0));

  // Utilisez useEffect pour mettre à jour l'état lorsque le sessionStorage change
  useEffect(() => {
    setIsLog(!!+(sessionStorage.getItem('log') || 0));
  }, [sessionStorage.getItem('log')]);

  return (
    <nav>
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
        <li><Link to="/parametres" className="nav-link">Paramètres</Link></li>
      </ul>

      {!isLog ? <Link to="/login" className="nav-link login-link">Login</Link> : null}
    </nav>
  );
}

export default Navbar;
