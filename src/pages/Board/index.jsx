import React, { useState } from 'react';

import Pagina from '../../components/Pagina';
import Kanban from '../../components/Kanban';
import NovaTarefaForm from '../../components/NovaTarefaForm';

import { Container, Title } from './style';

const Board = () => {
  const [tarefas, setTarefas] = useState([]);

  return (
    <Pagina>
      <Container>
        <Title>Board</Title>

        <NovaTarefaForm tarefas={tarefas} cadastraTarefa={setTarefas} />

        <Kanban tarefas={tarefas} />
      </Container>
    </Pagina>
  );
};

export default Board;
