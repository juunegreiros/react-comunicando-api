import React from 'react';
import KanbanWrapper from './style';
import Coluna from './Coluna';

const Kanban = ({ tarefas }) => {
  return (
    <KanbanWrapper>
      <Coluna tarefas={tarefas} tipo="backlog" titulo="Backlog" />
    </KanbanWrapper>
  );
};

export default Kanban;
