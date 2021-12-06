import styled from "styled-components"

export const Button = styled.button`
  cursor: pointer;
  width: ${props => props.variant === "contained" && "120px"};
  height: 40px;
  background: ${props => props.variant !== "contained" && "none"};
  border: ${props => props.variant !== "contained" && "none"};
  font-size: ${props => props.variant === "icon" ? "2rem" : "1rem"};
`