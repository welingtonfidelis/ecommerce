import * as Styled from "./Modal.styled"

const Modal = (props) => {
  if(props.isActive) {
    return (
      <Styled.Background>
        <Styled.Content>
          {props.children}
        </Styled.Content>
      </Styled.Background>
    )
  }

  return null
}

export default Modal