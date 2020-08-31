import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Titulo = styled.h1`
  text-align: center;
  font-weight: normal;
  margin-top: 3rem;
  color: var(--darkerBlue);
`;

export const Botao = styled.button`
  background-color: var(--primary);
  border: none;
  border-radius: 4px;
  color: var(--white);
  cursor: pointer;
  margin: 1rem;
  padding: 1rem;
`;
