import * as Styled from "./Badge.styled.js"

const Badge = (props) => {
  return (
    <Styled.Container>
      {props.children}
      <Styled.Value>{props.value}</Styled.Value>
    </Styled.Container>
  )
}

export default Badge