import React, { useState } from 'react';
import './Tarjetas.css';
function Tarjetas() {
  const [card, setcard] = useState(false);

  const changeCard = () => setcard(!card);

  return (
    <div class='main'>
      <div class='container flex'>
        <div class='card1 inline-block'>
          {/* card mastercard */}
          <div class='container p-3 flex justify-center items-center'>
            <div class='w-60 p-1.5 bg-red-500 rounded-lg max-w-xs max-h-44'>
              <img src='./images/mc_symbol.svg' alt='mc' width='75' />
              <span class='text-3xl text-gray-200 '>•••• •••• •••• ••••</span>
              <div class='flex justify-between items-center pt-2'>
                <div class='flex flex-col'>
                  <span class='text-xs text-gray-300 font-bold'>
                    Javier S. García
                  </span>
                  <span class='text-xs text-gray-300 font-bold'>10/18</span>
                </div>
                <img
                  src='https://img.icons8.com/offices/80/000000/sim-card-chip.png'
                  width='48'
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={card ? 'card animateCard' : 'card cardBack'}
          onClick={changeCard}
        >
          {/* card visa */}
          <div class='container p-3 flex justify-center items-center '>
            <div class='w-60 p-1.5 bg-blue-500	rounded-lg mas-w-xs max-h-44'>
              <img src='./images/visa.png' alt='visa' width='50' />
              <span class='text-3xl text-gray-200'>•••• •••• •••• ••••</span>
              <div class='flex justify-between items-center pt-2'>
                <div class='flex flex-col'>
                  <span class='text-xs text-gray-300 font-bold'>
                    Javier S. García
                  </span>
                  <span class='text-xs text-gray-300 font-bold'>10/18</span>
                </div>
                <img
                  src='https://img.icons8.com/offices/80/000000/sim-card-chip.png'
                  width='48'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarjetas;
