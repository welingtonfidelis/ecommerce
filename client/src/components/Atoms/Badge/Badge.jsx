import * as Styled from "./Badge.styled.js"

const Badge = ({ children, value }) => {
  return (
    <Styled.Container>
      {children}
      {value > 0 && <Styled.Value>{value}</Styled.Value>}
    </Styled.Container>
  )
}

export default Badge