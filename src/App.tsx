import React from 'react';
import Today from './components/Left Side';
import Forecast from './components/Right Side';
import GlobalStyle from './styles/global'
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import usePersistedState from './utils/usePersistedState';
import { City, Container, Input, Left } from './styles';
import { useState } from 'react'

export default function App() {

  const [city, setCity] = useState('Sydney')
  const [enter, setEnter] = useState(false)

  async function search(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == 'Enter') {
      enter ? setEnter(false) : setEnter(true)
    }
  }

  const [theme,setTheme] = usePersistedState('theme',light)

  const toggleTheme = () =>{
    setTheme(theme.title ==='light'? dark: light)
  }

  return (
    <Container>
      <GlobalStyle />

      <Left>

        <City>
          <Input type='text'
            placeholder="Digite aqui a cidade"
            value={city}
            onChange={e => setCity(e.target.value)}
            onKeyDown={event => search(event)}
          />
        </City>

        <Today city={city} enter={enter} />

      </Left>

      <Forecast city={city} enter={enter} />
    </Container>
  );
}
