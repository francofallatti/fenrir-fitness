import React, { useState } from 'react';
import './Triangle.css';

function Triangle() {
  return (
    <div className='div11 flex w-screen'>
      <div className='xd1'>
        <div class='xd div-one '>
          <img
            src='https://i.pinimg.com/736x/a7/19/ce/a719ce8b0ebaf7d6190d79ca0d5e9c7b.jpg'
            alt=''
            className='h-screen w-screen md:hidden'
          />
          <img
            className='h-screen w-screen'
            src='https://i.ibb.co/JRDvjSG/4046-2.jpg'
            alt=''
          />
        </div>

        <div class='xd div-two cursor-pointer'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlesjICLeTwodMd_Nd5IveR_zvcruzvdsFn8l5tyS8kP1rTWSZrz5nefDehEvKLGovRF8&usqp=CAU'
            alt=''
            className='h-screen w-screen md:hidden'
          />
          <img
            className='h-screen w-screen'
            src='https://i.ibb.co/R0zPRhf/4066-2.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Triangle;
