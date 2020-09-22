import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>työpaikkoja vantaalla </h1>
      <h1>P-BLOCC </h1>
      <Link to="/" style={linkStyle}>Duunit</Link>  <Link to="/weather" style={linkStyle}>Säätiedot</Link>
    </header>
  )
}
const linkStyle = {
  color: '#FF1493',
  textDecoration: 'none'
}


const headerStyle = {
  background: '#333333',
  color: '#FF69B4',
  padding: '10px',
  textAlign: 'middle',

}

export default Header
