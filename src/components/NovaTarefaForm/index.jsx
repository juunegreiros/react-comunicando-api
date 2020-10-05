import React, { useState } from 'react';
import propTypes from 'prop-types';

import { Form, Button } from './style';

import FormField from '../FormField';

const NovaTarefaForm = ({ tarefas, cadastraTarefa }) => {
  const valoresIniciais = {
    quadro: '',
    texto: '',
  };
  const [valores, setValores] = useState(valoresIniciais);

  const handleSubmit = (evento) => {
    evento.preventDefault();

    cadastraTarefa([...tarefas, valores]);
  };

  const handleChange = (evento, key) => {
    const { value } = evento.target;

    setValores({ ...valores, [key]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="quadro"
        name="quadro"
        value={valores.quadro}
        onChange={(e) => handleChange(e, 'quadro')}
      />

      <FormField
        label="texto"
        name="texto"
        value={valores.texto}
        onChange={(e) => handleChange(e, 'texto')}
      />

      <Button type="submit">Cadastrar</Button>
    </Form>
  );
};

NovaTarefaForm.propTypes = {
  cadastraTarefa: propTypes.func.isRequired,
};

export default NovaTarefaForm;
