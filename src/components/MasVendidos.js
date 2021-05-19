import React from 'react';
import Card from './Card';

import Mobilecard from './mobilecard';

function MasVendidos() {
  return (
    <>
      <h1 className='text-center'>Mas Vendidos</h1>
      <div className=' bg-white '>
        <div className='grid gap-x-2 grid-cols-6'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className='md:hidden'>
          <Mobilecard />
        </div>
      </div>
    </>
  );
}

export default MasVendidos;
