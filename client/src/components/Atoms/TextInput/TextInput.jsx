import * as Styled from "./TextInput.styled"

const TextInput = (props) => {
  return (
    <Styled.Container>
      <Styled.Label>{props.label}:&nbsp;</Styled.Label>
      <Styled.Input {...props} />
    </Styled.Container>
  )
}

export default TextInput