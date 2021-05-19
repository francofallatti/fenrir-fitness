import React from 'react';
// import useDarkMode from '../../hook/useDarkMode';
import Nosotros from '../Nosotros';
// import { CalculadorRM } from '../CalculadorRM';
import Car from '../Car';
import Triangle from '../Triangle';
import MasVendidos from '../MasVendidos';

function Home() {
  // useDarkMode();
  return (
    <div className='Home-container  bg-gray-200 dark:bg-gray-900'>
      {/* <Carrousel /> */}
      <Car />

      <MasVendidos />

      <Triangle />
      <Nosotros />

      {/* <CalculadorRM /> */}
    </div>
  );
}

export default Home;
