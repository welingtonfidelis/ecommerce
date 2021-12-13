import * as Styled from "./Button.styled"
import PropTypes from "prop-types"

const Button = (props) => {
  const { children } = props;
  
  function renderButton() {
    return <Styled.Button {...props}>{children}</Styled.Button>
  }

  if(Array.isArray(children)) {
    return (
      <Styled.Container>
        {renderButton()}
      </Styled.Container>
    )
  }

  return renderButton()
}

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "text", "icon"])
}

Button.defaultProps = {
  variant: "contained"
}

export default Button