import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 200px;
  height: 200px;
  padding: 0.5rem;
  border: 1px solid black;
`;

export const Image = styled.img`
  height: 100px;
  width: auto;
`;

export const Name = styled.p`
  margin: 0;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;
