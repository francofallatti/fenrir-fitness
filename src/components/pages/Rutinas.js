import React from 'react';

function Rutinas() {
  return (
    <div className='h-screen flex grid grid-cols-3 bg-red-900'>
      <div className='h-full flex bg-yellow-300 border-4 border-white'>
        <img
          className='object-cover'
          src='./images/calistenia.jpg'
          alt='calistenia'
        />
      </div>
      <div className='h-full flex bg-green-400 border-4 border-white'>
        <img
          className='object-cover'
          src='./images/gimnasio.jpg'
          alt='gimnasio'
        />
      </div>
      <div className='h-full flex bg-purple-400 border-4 border-white'>
        <img
          className='object-cover'
          src='./images/personalizado.jpg'
          alt='personalizado'
        />
      </div>
    </div>
  );
}

export default Rutinas;
