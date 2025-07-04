import React from 'react';
import Today from './components/Left Side';
import Forecast from './components/Right Side';
import { useState } from 'react'

export default function App() {

  const [city, setCity] = useState('Sydney')
  const [enter, setEnter] = useState(false)

  async function search(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      enter ? setEnter(false) : setEnter(true)
    }
  }

  return (
    <div className='flex justify-evenly items-center bg-cyan-300 bg-cover overflow-hidden h-screen max-lg:flex-col max-lg:h-full gap-4'>

      <div className='flex flex-col w-xl max-md:w-xs max-lg:mt-5 lg:ml-4 '>

        <div className='flex flex-col rounded-3xl bg-gray-600/35  mb-1 max-lg:mb-4'>
          <input className='flex justify-center text-6xl bg-transparent border rounded-3xl text-center focus:outline-none' 
            type='text'
            placeholder="Digite aqui a cidade"
            value={city}
            onChange={e => setCity(e.target.value)}
            onKeyDown={event => search(event)}
          />
        </div>

        <Today city={city} enter={enter} />

      </div>

      <Forecast city={city} enter={enter} />

    </div >
  );
}
