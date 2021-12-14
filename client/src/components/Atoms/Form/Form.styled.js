import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  gap: 0.25rem;
`;
