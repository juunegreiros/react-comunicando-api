import styled from 'styled-components';

export const FieldWrapper = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Label = styled.label`
  padding: 0;
  margin-bottom: 0.5rem;
  color: var(--darkBlue);
`;

export const Input = styled.input`
  border: 1px solid var(--darkBlue);
  border-radius: 4px;
  color: var(--primary);
  font-size: 1rem;
  padding: 0.5rem;
  outline: 0;
  margin-right: 1rem;
`;
