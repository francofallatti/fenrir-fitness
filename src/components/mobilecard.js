import React from 'react';
import './mobilecard.css';

function mobilecard() {
  // const [direction, setDirection] = useState(true);
  var sliders = document.querySelectorAll('.slider-wrapper');

  for (let i = 0; i < sliders.length; i++) {
    let slider = sliders[i].querySelector('.slider');
    let wrapper = slider.querySelector('.wrapper');

    setWrapperWidth(sliders[i]);

    slider.addEventListener('scroll', () => {
      if (slider.scrollLeft >= wrapper.clientWidth - slider.clientWidth);
    });
  }

  function setWrapperWidth(sliderWrapper) {
    let slider = sliderWrapper.querySelector('.slider');
    let wrapper = slider.querySelector('.wrapper');
    let slides = wrapper.querySelectorAll('.slide');
    wrapper.style.width = slides.length * slides[0].clientWidth + 'px';
  }

  return (
    <div className='container'>
      <div id='todays-deals' className='section'>
        <div className='slider-wrapper'>
          <div className='slider items'>
            <div className='wrapper' style={{ width: '2310px' }}>
              <div className='item slide'>
                <div class=''>
                  {/* el-wrapper */}
                  <div class='box-up-test'>
                    <img
                      class='imgs'
                      src='https://i.ibb.co/Zxr2Kd4/D-NQ-NP-776406-MLA44182684352-112020-O.jpg'
                      alt=''
                    />
                    <div class='img-infoxd'>
                      <div class='info-innerxd'>
                        <span class='p-namexd'>Whey Protein 1kg</span>
                        <span class='p-companyxd'>Nutrilab</span>
                      </div>
                      <div class='a-sizexd'>
                        Sabores :{' '}
                        <span class='sizexd'>
                          Chocolate, Fruttila, Vaimilla
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class='box-downxd '>
                    <div class='h-bgxd'>
                      <div class='h-bg-innerxd'></div>
                    </div>

                    <a class='cartxd' href='/'>
                      <span class='pricexd'>$1500</span>
                      <span class='add-to-cartxd justify-center'>
                        <span class='txt'>Añadir al carrito</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='item slide'>
                <div class=''>
                  {/* el-wrapper */}
                  <div class='box-up-test'>
                    <img
                      class='imgs'
                      src='https://i.ibb.co/Zxr2Kd4/D-NQ-NP-776406-MLA44182684352-112020-O.jpg'
                      alt=''
                    />
                    <div class='img-infoxd'>
                      <div class='info-innerxd'>
                        <span class='p-namexd'>Whey Protein 1kg</span>
                        <span class='p-companyxd'>Nutrilab</span>
                      </div>
                      <div class='a-sizexd'>
                        Sabores :{' '}
                        <span class='sizexd'>
                          Chocolate, Fruttila, Vaimilla
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class='box-downxd '>
                    <div class='h-bgxd'>
                      <div class='h-bg-innerxd'></div>
                    </div>

                    <a class='cartxd' href='/'>
                      <span class='pricexd'>$1500</span>
                      <span class='add-to-cartxd justify-center'>
                        <span class='txt'>Añadir al carrito</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='item slide'>
                <div class=''>
                  {/* el-wrapper */}
                  <div class='box-up-test'>
                    <img
                      class='imgs'
                      src='https://i.ibb.co/Zxr2Kd4/D-NQ-NP-776406-MLA44182684352-112020-O.jpg'
                      alt=''
                    />
                    <div class='img-infoxd'>
                      <div class='info-innerxd'>
                        <span class='p-namexd'>Whey Protein 1kg</span>
                        <span class='p-companyxd'>Nutrilab</span>
                      </div>
                      <div class='a-sizexd'>
                        Sabores :{' '}
                        <span class='sizexd'>
                          Chocolate, Fruttila, Vaimilla
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class='box-downxd '>
                    <div class='h-bgxd'>
                      <div class='h-bg-innerxd'></div>
                    </div>

                    <a class='cartxd' href='/'>
                      <span class='pricexd'>$1500</span>
                      <span class='add-to-cartxd justify-center'>
                        <span class='txt'>Añadir al carrito</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='item slide'>
                <div class=''>
                  {/* el-wrapper */}
                  <div class='box-up-test'>
                    <img
                      class='imgs'
                      src='https://i.ibb.co/Zxr2Kd4/D-NQ-NP-776406-MLA44182684352-112020-O.jpg'
                      alt=''
                    />
                    <div class='img-infoxd'>
                      <div class='info-innerxd'>
                        <span class='p-namexd'>Whey Protein 1kg</span>
                        <span class='p-companyxd'>Nutrilab</span>
                      </div>
                      <div class='a-sizexd'>
                        Sabores :{' '}
                        <span class='sizexd'>
                          Chocolate, Fruttila, Vaimilla
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class='box-downxd '>
                    <div class='h-bgxd'>
                      <div class='h-bg-innerxd'></div>
                    </div>

                    <a class='cartxd' href='/'>
                      <span class='pricexd'>$1500</span>
                      <span class='add-to-cartxd justify-center'>
                        <span class='txt'>Añadir al carrito</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='item slide'>
                <div class=''>
                  {/* el-wrapper */}
                  <div class='box-up-test'>
                    <img
                      class='imgs'
                      src='https://i.ibb.co/Zxr2Kd4/D-NQ-NP-776406-MLA44182684352-112020-O.jpg'
                      alt=''
                    />
                    <div class='img-infoxd'>
                      <div class='info-innerxd'>
                        <span class='p-namexd'>Whey Protein 1kg</span>
                        <span class='p-companyxd'>Nutrilab</span>
                      </div>
                      <div class='a-sizexd'>
                        Sabores :{' '}
                        <span class='sizexd'>
                          Chocolate, Fruttila, Vaimilla
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class='box-downxd '>
                    <div class='h-bgxd'>
                      <div class='h-bg-innerxd'></div>
                    </div>

                    <a class='cartxd' href='/'>
                      <span class='pricexd'>$1500</span>
                      <span class='add-to-cartxd justify-center'>
                        <span class='txt'>Añadir al carrito</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <nav>
            <div className='left disabled'>
              <i className='fas fa-chevron-left'></i>
            </div>
            <div className='right'>
              <i className='fas fa-chevron-right'></i>
            </div>
          </nav> */}
        </div>
      </div>
    </div>
  );
}

export default mobilecard;
