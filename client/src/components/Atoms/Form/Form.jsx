import * as Styled from "./Form.styled"

const Form = (props) => {
  return (
    <Styled.Form {...props} >{props.children}</Styled.Form>
  )
}

export default Form