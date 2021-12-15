import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  max-height: 600px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  grid: 0.5rem;

  & svg {
    vertical-align: bottom;
  }
`;

export const Client = styled.div`
  display: flex;
`;

export const Text = styled.p`
  margin: 0;
`;
