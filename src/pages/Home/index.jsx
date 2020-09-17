import React from 'react';
import Pagina from '../../components/Pagina';
import { Container, Main, Titulo, Botao } from './style';

const Home = () => (
  <Pagina>
    <Main>
      <Container>
        <Titulo>Bem-vindos ao Aluranban!</Titulo>
        <Botao to="/board">Entrar no board</Botao>
      </Container>
    </Main>
  </Pagina>
);

export default Home;
