import styled from "styled-components";

export const Header = styled.header`
  background-color: pink;
  padding: 1.5rem;
`;

export const BorderedContainer = styled.div`
  display: flex;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 2px solid;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 0.5rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  /* width: 140px; */
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;
