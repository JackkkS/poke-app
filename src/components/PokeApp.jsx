import React, { useState } from 'react';

// Components
import InfoPoke from './InfoPoke';
import Types from './Types';

function PokeApp({ poke, prevPoke, nextPoke }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-center text-5xl font-bold">{poke.name}</h1>
        <img className='shadow-lg bg-yellow-100 my-5 pb-5 rounded-2xl' src={poke.sprites?.other.home.front_default} alt={poke.name} />
        <div>
          <h3 className='font-bold text-2xl text-center my-5'>Type</h3>
          <div className="flex justify-center my-5">
            {poke.types?.map((type, idx) => (
              <Types key={idx} type={type} />
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-2 mb-2">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={prevPoke}
          >
            Previous
          </button>
          <button
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={nextPoke}
          >
            Next
          </button>
        </div>
        <div className="flex justify-center my-5">
            <button
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={openModal}
            >
            Info
            </button>
        </div>
        <InfoPoke isOpen={isModalOpen} closeModal={closeModal} poke={poke} />
      </div>
    </div>
  );
}

export default PokeApp;
