import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import ReactLoading from 'react-loading';


// Components
import SearchPoke from './components/SearchPoke'
import PokeApp from './components/PokeApp'


function App() {
  const [poke, setPoke] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [number, setNumber] = useState(1)


  useEffect(() => {

    let abortContrallor = new AbortController();

    const loadPoke = async () => {
      try {

        setLoading(true);
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`, {
          signal: abortContrallor.signal
        });

        setPoke(response.data);
        setError("");

      } catch (error) {
        setError("Some thing went wrong!")
      } finally {
        setLoading(false);
      }
    }

    loadPoke();

    return () => abortContrallor.abort();

  }, [number]);

  const prevPoke = () => {
    if (number > 1) {
      setNumber((number) => number - 1);
    }
  }

  const nextPoke = () => {
    setNumber((number) => number + 1)
  }

  const onSearch = (data, errorMessage) => {
    if (data) {
      setNumber(data.id);
      setPoke(data);
    } else {
      setError(errorMessage);
    }
  };

  return (
    <div>
      {loading ?
        <div className='flex justify-center items-center h-screen'>
          <img src="https://media.tenor.com/Dn_9yHsXyVAAAAAC/eevee-pokemon.gif" alt="" />
        </div>
        :
        <div className="container mx-auto mt-10 px-4">
          <div className='max-w-10xl p-6 bg-yellow-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <SearchPoke onSearch={onSearch} />
            <PokeApp poke={poke} prevPoke={prevPoke} nextPoke={nextPoke} />
          </div>
        </div>
      }



    </div>
  )
}

export default App
