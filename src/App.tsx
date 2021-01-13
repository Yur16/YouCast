import React from 'react';
import Video from './components/Video';
import { Container } from './styles';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Container>
      <h1>Recomendado para você</h1>

      <Video />

      <GlobalStyle />
    </Container>
  );
}

export default App;
