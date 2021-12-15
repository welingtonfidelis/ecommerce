import styled from "styled-components";

export const Container = styled.main`
  padding: 1.5rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-block: 0;
  padding-inline: 0;
`;

export const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
  padding: 8px;
  border: 1px solid #e0e0e0;

  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background: #e3e3e3;
  }

  & svg {
    vertical-align: bottom;
  }
`;

export const Text = styled.p`
  margin: 0;
`;
