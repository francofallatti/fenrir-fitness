import React from 'react';
import './Card.css';

function Card() {
  return (
    <div class='el-wrapper'>
      <div class='box-up'>
        <img
          class='img'
          src='https://i.ibb.co/Zxr2Kd4/D-NQ-NP-776406-MLA44182684352-112020-O.jpg'
          alt=''
        />
        <div class='img-info'>
          <div class='info-inner'>
            <span class='p-name'>Whey Protein 1kg</span>
            <span class='p-company'>Nutrilab</span>
          </div>
          <div class='a-size'>
            Sabores : <span class='size'>Chocolate, Fruttila, Vaimilla</span>
          </div>
        </div>
      </div>

      <div class='box-down '>
        <div class='h-bg'>
          <div class='h-bg-inner'></div>
        </div>

        <a class='cart' href='/'>
          <span class='price'>$1500</span>
          <span class='add-to-cart justify-center'>
            <span class='txt'>Añadir al carrito</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Card;
