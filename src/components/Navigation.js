import React from 'react';


const styles = {
  navbarStyle: {
    margin: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};

function Navigation({ currentPage, handlePageChange }) {
  return (

    <div>
      
        <ul style={styles.navbarStyle} className="nav nav-tabs">
          <h2>Cameron</h2>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
              </a>
          </li>
        </ul>
    </div>
    
  );
}

export default Navigation;