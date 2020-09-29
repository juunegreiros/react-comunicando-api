import React from 'react';
import Pagina from '../../components/Pagina';
import Kanban from '../../components/Kanban';
import { Container, Title } from './style';

const Board = () => (
  <Pagina>
    <Container>
      <Title>Board</Title>

      <Kanban />
    </Container>
  </Pagina>
);

export default Board;
