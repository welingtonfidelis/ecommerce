import styled from "styled-components";

export const Container = styled.main`
  padding: 1.5rem;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
  padding: 8px;
  border: 1px solid #e0e0e0;

  transition: .5s;
  &:hover {
    cursor: pointer;
    background: #e3e3e3;;
  }
`