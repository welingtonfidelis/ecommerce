import styled from "styled-components";

export const Container = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid black;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(218px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  margin-top: 1rem;
`;
