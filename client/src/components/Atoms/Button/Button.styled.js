import styled from "styled-components";

export const Container = styled.div`
  > button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: ${(props) => props.variant === "contained" && "120px"};
  height: 40px;
  background: ${(props) => props.variant !== "contained" && "none"};
  font-size: 1rem;
  text-align: center;
  border: ${(props) => props.variant !== "contained" && "none"};
  border-radius: 4px;

  transition: 0.3s;
  background-color: transparent;

  svg {
    font-size: 2rem;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  :active {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
