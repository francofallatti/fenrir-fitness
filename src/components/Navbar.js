import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMenu}>
            FENRIR
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <li className='nav-links' onClick={closeMenu}>
                Productos
              </li>
              <ul className='sub-nav-items'>
                <li className='sub-nav-item'>
                  <Link
                    to='/suplementos'
                    className='nav-link'
                    onClick={closeMenu}
                  >
                    Suplementos
                  </Link>
                </li>
                <li className='sub-nav-item'>
                  <Link
                    to='/articulos'
                    className='nav-link'
                    onClick={closeMenu}
                  >
                    Articulos
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <li className='nav-links' onClick={closeMenu}>
                Rutinas
              </li>
              <ul className='sub-nav-items'>
                <li className='sub-nav-item'>
                  <Link to='/gimnasio' className='nav-link' onClick={closeMenu}>
                    Gimnasio
                  </Link>
                </li>
                <li className='sub-nav-item'>
                  <Link
                    to='/calistenia'
                    className='nav-link'
                    onClick={closeMenu}
                  >
                    Calistenia
                  </Link>
                </li>
                <li className='sub-nav-item'>
                  <Link
                    to='/funcional'
                    className='nav-link'
                    onClick={closeMenu}
                  >
                    Funcional
                  </Link>
                </li>
                <li className='sub-nav-item'>
                  <Link
                    to='/calculadoras'
                    className='nav-link'
                    onClick={closeMenu}
                  >
                    Calculadoras
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <li className='nav-links' onClick={closeMenu}>
                Nosotros
              </li>
              <ul className='sub-nav-items'>
                <li className='sub-nav-item'>
                  <Link
                    to='/sobre-nosotros'
                    className='nav-link'
                    onClick={closeMenu}
                  >
                    Sobre nosotros
                  </Link>
                </li>
                <li className='sub-nav-item'>
                  <Link
                    to='/contactanos'
                    className='nav-link'
                    onClick={closeMenu}
                  >
                    Contactanos
                  </Link>
                </li>
                <li className='sub-nav-item'>
                  <Link to='/faq' className='nav-link' onClick={closeMenu}>
                    FaQ
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <li className='nav-links' onClick={closeMenu}>
                Ingresar
              </li>
              <ul className='sub-nav-items'>
                <li className='sub-nav-item'>
                  <Link
                    to='/iniciar-sesion'
                    className='nav-link'
                    onClick={closeMenu}
                  >
                    Iniciar Sesion
                  </Link>
                </li>
                <li className='sub-nav-item'>
                  <Link
                    to='/registrarse'
                    className='nav-link'
                    onClick={closeMenu}
                  >
                    Registrarse
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link to='/carrito' className='nav-links' onClick={closeMenu}>
                Carrito
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
