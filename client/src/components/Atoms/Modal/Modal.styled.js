import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  background-color: white;
  margin: auto;
  padding: 1rem;
`;
