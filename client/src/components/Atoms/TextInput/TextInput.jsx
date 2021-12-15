import * as Styled from "./TextInput.styled"

const TextInput = (props) => {
  const { error, label, required } = props
  return (
    <Styled.Container>
      <Styled.Label error={error}>
        {label}:&nbsp;
        {required && <Styled.Red>*</Styled.Red>}
      </Styled.Label>
      <Styled.Input {...props} />
      <Styled.ErrorContainer>
        {error && <Styled.Red>Mandatory Field</Styled.Red>}
      </Styled.ErrorContainer>
    </Styled.Container>
  )
}

export default TextInput