import React from 'react';
import Modal from 'react-modal';

//Components
import Types from './Types';
import Stats from './Stats';

const InfoPoke = ({ isOpen, closeModal, poke }) => {
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Pokemon Info Modal"
                ariaHideApp={false}
                
            >
                <div className='flex justify-end'>
                    <button
                        type="button"
                        onClick={closeModal}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg
                            className="w-7 h-7"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>
                <div className="grid grid-cols-2 bg-violet-300 ">
                    <div className='text-center border-2 border-r-black'>
                        <h2 className='text-5xl font-bold my-3'>Pokemon Details</h2>
                        <h3 className='text-4xl font-bold my-3'>Name: {poke.name}</h3>
                        <div className="flex justify-center">
                            <img className='bg-yellow-200 rounded-xl shadow-xl my-5' src={poke.sprites?.other.home.front_default} alt={poke.name} />
                        </div>
                        <div className='text-lg my-5'>
                            <h3>Base Experience : {poke.base_experience}</h3>
                            <h3>Weight : {poke.weight}</h3>
                            <h3>Height : {poke.height}</h3>
                        </div>
                    </div>
                    <div className='text-center border-2 border-l-black'>
                        <h3 className='text-3xl font-bold my-5'>Ability</h3>
                        <ul>
                            {poke.abilities?.map((abil, idx) => (
                                <li className='text-lg my-3' key={idx}>{abil.ability.name}</li>
                            ))}
                        </ul>
                        <h3 className='text-3xl font-bold my-5'>Type</h3>
                        <div className="flex justify-center my-5 ">
                            {poke.types?.map((type, idx) => (
                                <Types key={idx} type={type} />
                            ))}
                        </div>
                        <h3 className="text-3xl font-bold my-5">Stats</h3>
                        <div className="flex justify-center my-5">
                            {poke.stats?.map((val, idx) => (
                                <Stats key={idx} stats={val} />
                            ))}
                        </div>


                    </div>
                </div>

            </Modal>
        </div>

    );
};

export default InfoPoke;
