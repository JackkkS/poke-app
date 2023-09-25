import React, { useState } from 'react';
import axios from 'axios';

function SearchPoke({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState('');

  const searchPoke = async () => {
    if (searchValue.trim() !== '') {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase()}`);
        onSearch(response.data, '');
      } catch (error) {
        onSearch(null, 'Pokemon not found');
      }
    }
  };

  return (
    <div className='flex justify-center my-10'>
      <input
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white w-80 h-9 border border-gray-300 p-4 mx-5 rounded-md'
        type="text"
        placeholder="Search Pokémon"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' onClick={searchPoke}>Search</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default SearchPoke;