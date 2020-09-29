import React from 'react';
import KanbanWrapper from './style';
import Lista from './Coluna';

const Kanban = () => {
  const tarefas = [
    {
      quadro: 'backlog',
      texto: 'primeira tarefa',
      id: 1,
    },
    {
      quadro: 'todo',
      texto: 'segunda tarefa',
      id: 2,
    },
  ];

  return (
    <KanbanWrapper>
      <Lista tarefas={tarefas} tipo="backlog" titulo="Backlog" />
    </KanbanWrapper>
  );
};

export default Kanban;
