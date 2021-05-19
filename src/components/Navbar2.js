import React, { useState } from 'react';
import './Navbar2.css';
import { Link } from 'react-router-dom';
import useDarkMode from '../hook/useDarkMode';
// import { AiFillCaretLeft } from 'react-icons/ai';

function Navbar2() {
  const [colorTheme, setTheme] = useDarkMode();
  const [click, setCLick] = useState(false);
  const [openRutinas, setRutinas] = useState(false);
  const [openNos, setNos] = useState(false);
  const [openLog, setLog] = useState(false);

  const [menumobile, setmenu] = useState('1.25rem');

  const handleClick = () => {
    setCLick(!click);
    setRutinas(false);
    setNos(false);
    setLog(false);
  };
  const Rutinas = () => {
    setCLick(false);
    setRutinas(!openRutinas);
    setNos(false);
    setLog(false);
  };
  const Nosotros = () => {
    setCLick(false);
    setRutinas(false);
    setNos(!openNos);
    setLog(false);
  };
  const Ingresar = () => {
    setCLick(false);
    setRutinas(false);
    setNos(false);
    setLog(!openLog);
  };

  const mobile = () => {
    setmenu('100rem');
  };

  return (
    <>
      <div
        className='relative'
        style={{
          background:
            'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)',
        }}
      >
        <div className='max-w-7xl mx-auto px-4 py-6  sm:px-6 md:py-0'>
          <div className='flex justify-between items-center  border-gray-100 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <Link to='/'>
                <img className='' src='./LOGODEF.png' width='80' alt='logo' />
                <span className='sr-only bg-black'>Workflow</span>
              </Link>
            </div>
            <div className='-mr-2 -my-2 md:hidden'>
              <div
                className='inline-flex text-2xl  px-4 '
                onClick={() => setTheme(colorTheme)}
              >
                {colorTheme === 'light' ? (
                  <i className='fas fa-moon text-white'></i>
                ) : (
                  <i className='fas fa-adjust text-white'></i>
                )}
              </div>
              <button
                type='button'
                className=' inline-flex items-center justify-center text-white text-3xl '
                aria-expanded={click}
                onClick={handleClick}
              >
                <i
                  className={click ? 'fas fa-times' : 'fas fa-bars'}
                  aria-hidden={click}
                />
              </button>
            </div>

            <div className='hidden md:flex items-center justify-center md:flex-1 lg:w-0'>
              <nav className='hidden justify h-20 md:flex text-xl sticky '>
                <div
                  className='relative justify-center items-center mt-6 px-4 hover:border-b-4'
                  aria-expanded={click}
                  onClick={handleClick}
                >
                  {/* boton de productos */}
                  <button
                    type='button'
                    className='text-white flex items-center text-base font-medium  '
                  >
                    <Link
                      to='/productos'
                      // onMouseOver={handleClick}
                      // onMouseDown={setCLick(false)}
                    >
                      Productos
                    </Link>
                    <svg
                      className='text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </button>

                  {/* submenu productos */}
                  <div
                    className={
                      click
                        ? 'block absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 '
                        : 'hidden'
                    }
                  >
                    {/* ring-black y todas las ring sirven para algo buscalo gil */}
                    <div className='rounded-lg shadow-lg ring-1  ring-opacity-5 overflow-hidden'>
                      <div className='item_color relative grid gap-6 sm:gap-8 sm:p-8 '>
                        <Link
                          to='/productos/suplementos'
                          className='-m-3 p-3 flex items-start rounded-lg text-white hover:text-black hover:bg-white '
                        >
                          <div className='ml-4'>
                            <p className=' text-base font-medium '>
                              Suplementos
                            </p>
                          </div>
                        </Link>

                        <Link
                          to='/productos/articulos'
                          className='-m-3 p-3 flex items-start rounded-lg text-white hover:text-black hover:bg-white'
                        >
                          <div className='ml-4'>
                            <p className='text-base font-medium '>Articulos</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='relative justify-center items-center mt-6 px-4 hover:border-b-4'
                  aria-expanded={openRutinas}
                  onClick={Rutinas}
                >
                  {/* boton de Rutinas */}
                  <button
                    type='button'
                    className='text-white flex items-center text-base font-medium  '
                  >
                    <Link to='/rutinas'>
                      <span>Rutinas</span>
                    </Link>
                    <svg
                      className='text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </button>

                  {/* submenu rutinas */}
                  <div
                    className={
                      openRutinas
                        ? 'block absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 '
                        : 'hidden'
                    }
                  >
                    <div className='rounded-lg shadow-lg ring-1  ring-opacity-5 overflow-hidden'>
                      <div className='item_color relative grid gap-6  sm:gap-8 sm:p-8'>
                        <Link
                          to='/rutinas/gimnasio'
                          className='-m-3 p-3 flex items-start rounded-lg text-white hover:text-black hover:bg-white'
                        >
                          <div className='ml-4'>
                            <p className='text-base font-medium '>Gimnasio</p>
                          </div>
                        </Link>

                        <Link
                          href='/rutinas/calistenia'
                          className='-m-3 p-3 flex items-start rounded-lg text-white hover:text-black hover:bg-white'
                        >
                          <div className='ml-4'>
                            <p className='text-base font-medium'>Calistenia</p>
                          </div>
                        </Link>

                        <Link
                          to='/rutinas/funcional'
                          className='-m-3 p-3 flex items-start rounded-lg text-white hover:text-black hover:bg-white'
                        >
                          <div className='ml-4'>
                            <p className='text-base font-medium '>Funcional</p>
                          </div>
                        </Link>

                        <Link
                          to='/rutinas/calculadores'
                          className='-m-3 p-3 flex items-start rounded-lg text-white hover:text-black hover:bg-white'
                        >
                          <div className='ml-4'>
                            <p className='text-base font-medium '>
                              Calculadores
                            </p>
                          </div>
                        </Link>

                        <Link
                          to='/rutinas/personalizado'
                          className='-m-3 p-3 flex items-start rounded-lg text-white hover:text-black hover:bg-white'
                        >
                          <div className='ml-4'>
                            <p className='text-base font-medium '>
                              Personalizado
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className='relative justify-center items-center mt-6 px-4 hover:border-b-4'
                  aria-expanded={openNos}
                  onClick={Nosotros}
                >
                  {/* boton de nosotros */}
                  <button
                    type='button'
                    className='text-white flex items-center text-base font-medium'
                  >
                    <span>Nosotros</span>
                    <svg
                      className='text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </button>

                  {/* submenu nosotros */}
                  <div
                    className={
                      openNos
                        ? 'block absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 '
                        : 'hidden'
                    }
                  >
                    <div className='rounded-lg shadow-lg ring-1  ring-opacity-5 overflow-hidden'>
                      <div className='item_color relative grid gap-6  sm:gap-8 sm:p-8'>
                        <Link
                          to='/sobre-nosotros'
                          className='-m-3 p-3 flex items-start rounded-lg text-white hover:text-black hover:bg-white'
                        >
                          <div className='ml-4'>
                            <p className='text-base font-medium'>
                              Sobre Nosotros
                            </p>
                          </div>
                        </Link>

                        <Link
                          to='/contactanos'
                          className='-m-3 p-3 flex items-start rounded-lg text-white hover:text-black hover:bg-white'
                        >
                          <div className='ml-4'>
                            <p className='text-base font-medium'>Contactanos</p>
                          </div>
                        </Link>

                        <Link
                          to='/faq'
                          className='-m-3 p-3 flex items-start rounded-lg 
                          text-white hover:text-black hover:bg-white'
                        >
                          <div className='ml-4'>
                            <p className='text-base font-medium'>FaQ</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className='relative justify-center items-center mt-6 px-4 hover:border-b-4'
                  aria-expanded={openLog}
                  onClick={Ingresar}
                >
                  {/* boton de ingresar */}
                  <button
                    type='button'
                    className='text-white flex items-center text-base font-medium'
                  >
                    <span>Ingresar</span>

                    <svg
                      className='text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </button>
                  {/* submenu ingresar */}
                  <div
                    className={
                      openLog
                        ? 'block absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 '
                        : 'hidden'
                    }
                  >
                    <div className='rounded-lg shadow-lg ring-1  ring-opacity-5 overflow-hidden'>
                      <div className='item_color relative grid gap-6 bg-white sm:gap-8 sm:p-8'>
                        <Link
                          to='/login'
                          className='-m-3 p-3 flex items-start rounded-lg text-white hover:text-black hover:bg-white '
                        >
                          <div className='ml-4'>
                            <p className='text-base font-medium '>
                              Iniciar Sesión
                            </p>
                          </div>
                        </Link>

                        <Link
                          to='/register'
                          className='-m-3 p-3 flex items-start rounded-lg text-white hover:text-black hover:bg-white '
                        >
                          <div className='ml-4'>
                            <p className='text-base font-medium '>
                              Registrarse
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='relative justify-center items-center mt-6 px-4 hover:border-b-4'>
                  <Link
                    to='/carrito'
                    className='text-white flex items-center text-base font-medium '
                  >
                    Carrito
                  </Link>
                </div>
                <div
                  className='relative justify-center items-center mt-6 px-4 hover:border-b-4 '
                  onClick={() => setTheme(colorTheme)}
                >
                  {colorTheme === 'light' ? (
                    <i className='fas fa-moon text-white'></i>
                  ) : (
                    <i className='fas fa-adjust text-white'></i>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile menu*/}
        <div
          className={
            click
              ? '  max-w-full absolute top-18 inset-x-0 transition transform origin-top-right md:hidden'
              : 'hidden'
          }
        >
          <div className='mobile_item_color z-50 pt-6 pb-6 px-5'>
            <nav className='grid gap-y-8	'>
              <div
                className=' nav__dropdown overflow-hidden max-h-5 justify-center cursor-pointer'
                onClick={mobile}
                style={{ maxHeight: menumobile }}
              >
                <h1>
                  Poductos
                  {/* <AiFillCaretLeft className=' nav__icon nav__dropdown-icon' /> */}
                </h1>

                <div className='pt-8 nav__dropdown-collapse'>
                  <div className='grid gap-y-8'>
                    <Link to='/productos/suplementos'>Suplemtentos</Link>

                    <Link to='/productos/articulos'>Articulos</Link>
                  </div>
                </div>
              </div>

              <div
                className=' nav__dropdown overflow-hidden max-h-5 justify-center cursor-pointer'
                onClick={mobile}
                style={{ maxHeight: menumobile }}
              >
                <h1>
                  Rutinas
                  {/* <AiFillCaretLeft className=' nav__icon nav__dropdown-icon' /> */}
                </h1>

                <div className='pt-8 nav__dropdown-collapse'>
                  <div className='grid gap-y-8'>
                    <Link to='/rutinas/gimnasio'>Gimnasio </Link>
                    <Link to='/rutinas/calistenia'>Calistenia</Link>
                    <Link to='/rutinas/funcional'>Articulos</Link>
                    <Link to='/rutinas/calistenia'>Calculadores</Link>
                    <Link to='/rutinas/funcional'>Personalizado</Link>
                  </div>
                </div>
              </div>

              <div
                className=' nav__dropdown overflow-hidden max-h-5 justify-center cursor-pointer'
                onClick={mobile}
                style={{ maxHeight: menumobile }}
              >
                <h1>
                  Nosotros
                  {/* <AiFillCaretLeft className=' nav__icon nav__dropdown-icon' /> */}
                </h1>

                <div className='pt-8 nav__dropdown-collapse'>
                  <div className='grid gap-y-8'>
                    <Link to='/sobre-nosotros'>Sobre Nosotros </Link>
                    <Link to='/contactanos'>Contactanos</Link>
                    <Link to='/faq'>FaQ</Link>
                  </div>
                </div>
              </div>

              <div
                className=' nav__dropdown overflow-hidden max-h-5 justify-center cursor-pointer'
                onClick={mobile}
                style={{ maxHeight: menumobile }}
              >
                <h1>
                  Ingresar
                  {/* <AiFillCaretLeft className=' nav__icon nav__dropdown-icon' /> */}
                </h1>

                <div className='pt-8 nav__dropdown-collapse'>
                  <div className='grid gap-y-8'>
                    <Link to='/login'>Iniciar Sesión</Link>
                    <Link to='/register'> Registrarse</Link>
                  </div>
                </div>
              </div>

              <div className=' text-center  max-h-5 justify-center cursor-pointer'>
                <h1>
                  Carrito
                  {/* <AiFillCaretLeft className=' nav__icon nav__dropdown-icon' /> */}
                </h1>
              </div>

              <a
                href='/'
                className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
              >
                <svg
                  className='flex-shrink-0 h-6 w-6 text-indigo-600'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                  />
                </svg>
                <span className='ml-3 text-base font-medium text-gray-900'>
                  Integrations
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar2;
