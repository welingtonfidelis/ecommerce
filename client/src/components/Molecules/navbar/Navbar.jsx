import { useNavigate } from "react-router-dom";
import { RiFileListFill, RiLogoutBoxFill, RiLoginBoxFill } from "react-icons/ri"
import { FaBook, FaShoppingCart } from "react-icons/fa"

import Button from "../../Atoms/Button/Button"
import Logo from "../../Atoms/Logo/Logo"
import { useAuth } from '../../../store/auth-context';

import * as Styled from "./Navbar.styled"

const Navbar = () => {
  const { signed, user, onLogout } = useAuth();
  const navigate = useNavigate();

  function renderButtonByRole() {
    if(user?.is_admin) {
      return <Button variant="text" onClick={() => navigate('/products')}><FaBook /> Register Products</Button>
    }
    return <Button variant="text" onClick={() => navigate('/cart')}><FaShoppingCart /> View Cart</Button>
  }

  function renderButtonsByLoggingStatus() {
    if(signed) {
      return (
        <>
          <Button variant="text" onClick={() => navigate('/cart')}><RiFileListFill /> Purchases</Button>
          <Button variant="text" onClick={() => onLogout()}><RiLogoutBoxFill /> Exit</Button>
        </>
      )
    }
    return <Button variant="text" onClick={() => navigate('/signin')}><RiLoginBoxFill /> Signin</Button>
  }

  return (
    <Styled.Header>
      <Styled.BorderedContainer>
          <Button variant="text" onClick={() => navigate('/')}><Logo /></Button>
          <Styled.ActionsContainer>
            {signed && <span>Hello {user.name}!</span>}
            {renderButtonByRole()}
            {renderButtonsByLoggingStatus()}
          </Styled.ActionsContainer>
      </Styled.BorderedContainer>
    </Styled.Header>
  )
}

export default Navbar