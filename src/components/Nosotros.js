import React from 'react';

function Nosotros() {
  return (
    <div className='bg-gray-400'>
      <div className='nosotros-container flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 '>
        <div className='fran-container w-full lg:w-1/2 px-4 py-2'>
          <div className='image'>
            <img
              src=''
              alt='Franco Horval'
              className='rounded-full w-6/12 m-auto border-gray-400 border-4'
            />
          </div>
          <div className='description '>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              reiciendis necessitatibus velit laudantium doloremque saepe
              consequatur quod recusandae a nobis ipsum, nesciunt vero ea
              sapiente quis, fugiat, nisi illum odio.
            </p>
          </div>
        </div>
        <div className='fran-container w-full lg:w-1/2 px-4 py-2'>
          <div className='image'>
            <img
              src=''
              alt='Franco Fallatti'
              className='rounded-full w-6/12 m-auto border-gray-400 border-4'
            />
          </div>
          <div className='description '>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              reiciendis necessitatibus velit laudantium doloremque saepe
              consequatur quod recusandae a nobis ipsum, nesciunt vero ea
              sapiente quis, fugiat, nisi illum odio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
