import React from 'react';
import { TarefaWrapper, Texto, Autor } from './style';

const Tarefa = ({ texto }) => (
  <TarefaWrapper>
    <Texto>{texto}</Texto>
  </TarefaWrapper>
);

export default Tarefa;
