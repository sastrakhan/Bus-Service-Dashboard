import React from 'react';
import './Header.css';

const Header = props => (
  <header className="people-header">
    <div className="people-logo">
      Chicago Bus Stops Dashboard
      {' '}
      <span aria-label="family" role="img">
        👨‍👩‍👧‍👦
      </span>
    </div>
  </header>
);

export default Header;
