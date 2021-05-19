import React from 'react';
import useDarkMode from '../../hook/useDarkMode';

function FaQ() {
  // useDarkMode();
  return (
    <div className='bg-gray-200 dark:bg-gray-900'>
      <section className='text-gray-700 '>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 dark:text-white'>
              Preguntas Frecuentes
            </h1>
            <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto dark:text-gray-500 '>
              Las preguntas más comunes sobre cómo funciona nuestro negocio,
              deporte y entrenamiento en general.
            </p>
          </div>
          <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
            <div className='w-full lg:w-1/2 px-4 py-2'>
              <details className='mb-4'>
                <summary className='font-semibold  bg-gray-400 rounded-md py-2 px-4 dark:bg-gray-700 dark:text-blue-600'>
                  ¿Cuáles son los medios de pago y envio?
                </summary>
                <div className='flex flex-wrap rounded  bg-gray-300 dark:bg-gray-600'>
                  <span className='ml-1.5 mb-1 mr-1.5 dark:text-gray-400'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt laudantium neque dolorem porro unde ab corrupti,
                    aspernatur quam? Impedit, ratione. Et quas nulla dignissimos
                    qui consequatur fuga! Maiores, facere optio?
                  </span>
                </div>
              </details>
              <details className='mb-4'>
                <summary className='font-semibold bg-gray-400 rounded-md py-2 px-4 dark:bg-gray-700 dark:text-blue-600'>
                  ¿Cualquier persona puede realizar los planes?
                </summary>
                <div className='flex flex-wrap rounded  bg-gray-300 dark:bg-gray-600'>
                  <span className='ml-1.5 mb-1 mr-1.5 dark:text-gray-400'>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </div>
              </details>
              <details className='mb-4'>
                <summary className='font-semibold  bg-gray-400 rounded-md py-2 px-4 dark:bg-gray-700 dark:text-blue-600'>
                  ¿Cual es el objetivo de nuestra página?
                </summary>
                <div className='flex flex-wrap rounded  bg-gray-300 dark:bg-gray-600'>
                  <span className='ml-1.5 mb-1 mr-1.5 dark:text-gray-400'>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </div>
              </details>
              <details className='mb-4'>
                <summary className='font-semibold  bg-gray-400 rounded-md py-2 px-4 dark:bg-gray-700 dark:text-blue-600'>
                  ¿En cuánto tiempo veo resultados?
                </summary>
                <div className='flex flex-wrap rounded bg-gray-300 dark:bg-gray-600'>
                  <span className='ml-1.5 mb-1 mr-1.5 dark:text-gray-400'>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </div>
              </details>

              <details className='mb-4'>
                <summary className='font-semibold  bg-gray-400 rounded-md py-2 px-4 dark:bg-gray-700 dark:text-blue-600'>
                  ¿Cuándo contratar un plan perzonalizado?
                </summary>
                <div className='flex flex-wrap rounded  bg-gray-300 dark:bg-gray-600'>
                  <span className='ml-1.5 mb-1 mr-1.5 dark:text-gray-400'>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </div>
              </details>
            </div>
            <div className='w-full lg:w-1/2 px-4 py-2'>
              <details className='mb-4'>
                <summary className='font-semibold  bg-gray-400 rounded-md py-2 px-4 dark:bg-gray-700 dark:text-blue-600'>
                  ¿Para qué sirve la proteina?
                </summary>
                <div className='flex flex-wrap rounded  bg-gray-300 dark:bg-gray-600'>
                  <span className='ml-1.5 mb-1 mr-1.5 dark:text-gray-400'>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </div>
              </details>

              <details className='mb-4'>
                <summary className='font-semibold  bg-gray-400 rounded-md py-2 px-4 dark:bg-gray-700 dark:text-blue-600'>
                  ¿Calistenia o gimnasio?
                </summary>
                <div className='flex flex-wrap rounded  bg-gray-300 dark:bg-gray-600'>
                  <span className='ml-1.5 mb-1 mr-1.5 dark:text-gray-400'>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </div>
              </details>
              <details className='mb-4'>
                <summary className='font-semibold  bg-gray-400 rounded-md py-2 px-4 dark:bg-gray-700 dark:text-blue-600'>
                  ¿Se puede ganar masa muscular con calistenia?
                </summary>
                <div className='flex flex-wrap rounded  bg-gray-300 dark:bg-gray-600'>
                  <span className='ml-1.5 mb-1 mr-1.5 dark:text-gray-400'>
                    Completamente si, se puede ganar masa muscular con
                    calistenia y trabajar a la perfección la hipertrofia, además
                    de un control completo de tu cuerpo.
                  </span>
                </div>
              </details>
              <details className='mb-4'>
                <summary className='font-semibold  bg-gray-400 rounded-md py-2 px-4 dark:bg-gray-700 dark:text-blue-600'>
                  ¿Cuando puedo pasar a la siguiente progresión?
                </summary>
                <div className='flex flex-wrap rounded  bg-gray-300 dark:bg-gray-600'>
                  <span className='ml-1.5 mb-1 mr-1.5 dark:text-gray-400'>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FaQ;
