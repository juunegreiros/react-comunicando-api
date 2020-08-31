import React from 'react';
import EstiloBase from '../../settings/theme';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { HomeWrapper, Container, Main, Titulo, Botao } from './style';

const Home = () => (
  <HomeWrapper>
    <EstiloBase />

    <Header />
    <Main>
      <Container>
        <Titulo>Bem-vindos ao Aluranban!</Titulo>
        <Botao>Entrar no board</Botao>
      </Container>
    </Main>
    <Footer />
  </HomeWrapper>
);

export default Home;
