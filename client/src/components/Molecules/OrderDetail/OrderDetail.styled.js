import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;

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

export const ActionsContainer = styled.div`
  justify-self: flex-end;
  display: flex;
  gap: 1rem;
`;
