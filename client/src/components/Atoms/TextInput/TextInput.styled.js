import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  min-width: 140px;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  min-width: 260px;
  resize: none;
  font-size: 1rem;
  /* line-height: ${(props) => props.as === "textarea" && 1}; */
`;
