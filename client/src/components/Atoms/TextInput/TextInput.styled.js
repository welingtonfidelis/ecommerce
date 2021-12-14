import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

export const Label = styled.label`
  min-width: 140px;
  margin-bottom: 0.25rem;
  color: ${(props) => props.error && "red"};
`;

export const Input = styled.input`
  min-width: 260px;
  resize: none;
  font-size: 1rem;
  border: ${(props) => props.error && "2px solid red"};
`;

export const Red = styled.span`
  color: red;
`;

export const ErrorContainer = styled.div`
  display: flex;
  height: 1rem;
  align-items: flex-end;
  margin-left: auto;
  font-size: 0.85rem;
`;
