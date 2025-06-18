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
    <div className='flex justify-evenly items-center bg-cyan-300 bg-cover overflow-hidden h-screen'>
      <div className='flex flex-col'>

        <div className='flex flex-col rounded-3xl bg-gray-600/35 p-1 mb-1   '>
          <input className='flex justify-center text-6xl bg-transparent border-none text-center focus:outline-none' 
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
