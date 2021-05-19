import React from 'react';
import { Link } from 'react-router-dom';
import Tarjetas from '../Tarjetas';

function Carrito() {
  return (
    <div class='h-screen bg-gray-300'>
      <div class='py-12'>
        <div class='max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl'>
          <div class='md:flex '>
            <div class='w-full p-4 px-5 py-5'>
              <div class='md:grid md:grid-cols-3 gap-2 '>
                {/* div de la parte principal del carrito */}
                <div class='col-span-2 p-5'>
                  <h1 class='text-xl font-medium '>Carrito de compras</h1>
                  <div class='flex justify-between items-center mt-6 pt-6'>
                    <div class='flex items-center'>
                      {' '}
                      <img
                        src='./images/proteina.jpg'
                        width='60'
                        class='rounded-full '
                      />
                      <div class='flex flex-col ml-3'>
                        {' '}
                        <span class='md:text-md font-medium'>
                          Proteina whey X-pro
                        </span>{' '}
                        <span class='text-xs font-light text-gray-400'>
                          #41551
                        </span>{' '}
                      </div>
                    </div>
                    <div class='flex justify-center items-center'>
                      <div class='pr-8 flex '>
                        {' '}
                        <span class='font-semibold'>-</span>{' '}
                        <input
                          type='text'
                          class='focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2'
                          value='1'
                        />{' '}
                        <span class='font-semibold'>+</span>{' '}
                      </div>
                      <div class='pr-8 '>
                        {' '}
                        <span class='text-xs font-medium'>$2500</span>{' '}
                      </div>
                      <div>
                        {' '}
                        <i class='fa fa-close text-xs font-medium'></i>{' '}
                      </div>
                    </div>
                  </div>
                  <div class='flex justify-between items-center pt-6 mt-6 border-t'>
                    <div class='flex items-center'>
                      {' '}
                      <img
                        src='./images/paralelas.jpg'
                        width='60'
                        class='rounded-full '
                      />
                      <div class='flex flex-col ml-3 '>
                        {' '}
                        <span class='text-md font-medium w-auto'>
                          Paralelas Grandes
                        </span>{' '}
                        <span class='text-xs font-light text-gray-400'>
                          #66999
                        </span>{' '}
                      </div>
                    </div>
                    <div class='flex justify-center items-center'>
                      <div class='pr-8 flex'>
                        {' '}
                        <span class='font-semibold'>-</span>{' '}
                        <input
                          type='text'
                          class='focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2'
                          value='1'
                        />{' '}
                        <span class='font-semibold'>+</span>{' '}
                      </div>
                      <div class='pr-8'>
                        {' '}
                        <span class='text-xs font-medium'>$11000</span>{' '}
                      </div>
                      <div>
                        {' '}
                        <i class='fa fa-close text-xs font-medium'></i>{' '}
                      </div>
                    </div>
                  </div>
                  <div class='flex justify-between items-center mt-6 pt-6 border-t'>
                    <div class='flex items-center'>
                      {' '}
                      <img
                        src='./images/gimnasio.jpg'
                        width='60'
                        class='rounded-full '
                      />
                      <div class='flex flex-col ml-3 '>
                        {' '}
                        <span class='text-md font-medium'>
                          Rutina Principante Gimnasio
                        </span>{' '}
                        <span class='text-xs font-light text-gray-400'>
                          #86577
                        </span>{' '}
                      </div>
                    </div>
                    <div class='flex justify-center items-center'>
                      <div class='pr-8 flex'>
                        {' '}
                        <span class='font-semibold'>-</span>{' '}
                        <input
                          type='text'
                          class='focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2'
                          value='1'
                        />{' '}
                        <span class='font-semibold'>+</span>{' '}
                      </div>
                      <div class='pr-8'>
                        {' '}
                        <span class='text-xs font-medium'>$1050</span>{' '}
                      </div>
                      <div>
                        {' '}
                        <i class='fa fa-close text-xs font-medium'></i>{' '}
                      </div>
                    </div>
                  </div>
                  <div class='flex justify-between items-center mt-6 pt-6 border-t'>
                    <div class='flex items-center'>
                      <Link to='/'>
                        <i class='fa fa-arrow-left text-sm pr-2'></i>{' '}
                        <span class='text-md font-medium text-blue-500'>
                          Seguir Comprando
                        </span>
                      </Link>
                    </div>
                    <div class='flex justify-center items-end'>
                      {' '}
                      <span class='text-sm font-medium text-gray-400 mr-1'>
                        Subtotal:
                      </span>{' '}
                      <span class='text-lg font-bold text-gray-800 '>
                        {' '}
                        $14.550
                      </span>{' '}
                    </div>
                  </div>
                </div>
                <div class=' p-5 bg-gray-800 rounded overflow-visible'>
                  {' '}
                  <span class='text-xl font-medium text-gray-100 block pb-3'>
                    Medios de pago
                  </span>
                  <span class='text-xs text-gray-400 '>Tipo de tarjeta</span>
                  <div class='overflow-visible flex justify-between items-center mt-2'>
                    <Tarjetas />
                  </div>
                  <div class='flex justify-center flex-col pt-3'>
                    {' '}
                    <label class='text-xs text-gray-400 '>
                      Name on Card
                    </label>{' '}
                    <input
                      type='text'
                      class='focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4'
                      placeholder='Giga Tamarashvili'
                    />{' '}
                  </div>
                  <div class='flex justify-center flex-col pt-3'>
                    {' '}
                    <label class='text-xs text-gray-400 '>
                      Card Number
                    </label>{' '}
                    <input
                      type='text'
                      class='focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4'
                      placeholder='**** **** **** ****'
                    />{' '}
                  </div>
                  <div class='grid grid-cols-3 gap-2 pt-2 mb-3'>
                    <div class='col-span-2 '>
                      {' '}
                      <label class='text-xs text-gray-400'>
                        Expiration Date
                      </label>
                      <div class='grid grid-cols-2 gap-2'>
                        {' '}
                        <input
                          type='text'
                          class='focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4'
                          placeholder='mm'
                        />{' '}
                        <input
                          type='text'
                          class='focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4'
                          placeholder='yyyy'
                        />{' '}
                      </div>
                    </div>
                    <div class=''>
                      {' '}
                      <label class='text-xs text-gray-400'>CVV</label>{' '}
                      <input
                        type='text'
                        class='focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4'
                        placeholder='XXX'
                      />{' '}
                    </div>
                  </div>{' '}
                  <button class='h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600'>
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tarjetas />
    </div>
  );
}

export default Carrito;
