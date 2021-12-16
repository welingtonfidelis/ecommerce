import styled from "styled-components";

export const TableContainer = styled.div`
  max-height: calc(100vh - 320px);
  width: 100%;
  overflow: auto;
  margin-bottom: 16px;
`;
export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const TableTh = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const TableTd = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;

  img {
    width: 80px;
  }

  svg {
    transition: 0.5s;
    color: gray;

    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`;
