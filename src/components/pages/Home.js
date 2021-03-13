import React from 'react';
import useDarkMode from '../../hook/useDarkMode';
import Nosotros from '../Nosotros';
// import { CalculadorRM } from '../CalculadorRM';
import Carrousel from '../Carrousel';
import Car from '../Car';

function Home() {
  // useDarkMode();
  return (
    <div className='Home-container bg-gray-200 dark:bg-gray-900'>
      {/* <Carrousel /> */}
      <Car />
      <h1>fenrir fitness</h1>
      <h2>test</h2>
      <Nosotros />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nisi
        error, adipisci quod quisquam molestias aliquam a? Dolore veniam
        corporis officiis sequi unde, temporibus, vel facere et cumque veritatis
        explicabo!
      </p>
      {/* <CalculadorRM /> */}
    </div>
  );
}

export default Home;
