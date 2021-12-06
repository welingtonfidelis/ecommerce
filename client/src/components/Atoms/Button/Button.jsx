import * as Styled from "./Button.styled"
import PropTypes from "prop-types"

const Button = (props) => {
  return (
    <Styled.Button {...props}>{props.children}</Styled.Button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "text", "icon"])
}

Button.defaultProps = {
  variant: "contained"
}

export default Button