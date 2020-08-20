import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>työpaikkoja vantaalla </h1>
    </header>
  )
}
const headerStyle = {
  background: '#333333',
  color: '#FF69B4',
  padding: '10px',
  textAlign: 'middle',

}
export default Header
