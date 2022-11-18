import React from 'react';
import Today from './components/Left Side';
import Forecast from './components/Right Side';
import GlobalStyle from './styles/global'
import { Container } from './styles';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      
      <Today />
      <Forecast />
    </Container>
  );
}


