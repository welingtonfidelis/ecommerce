import { FaShoppingCart } from "react-icons/fa"

import Button from "../../Atoms/Button/Button"
import Logo from "../../Atoms/Logo/Logo"
import * as Styled from "./Navbar.styled"
import { useAuth } from '../../../store/auth-context';

const Navbar = () => {
  const { signed, user, onLogout } = useAuth();

  return (
    <Styled.Header>
      <Styled.BorderedContainer>
          <Logo />
          <Styled.ActionsContainer>
            <Button variant="text" onClick={() => console.log("oi")}>View Cart</Button>
            <Button variant="icon" onClick={() => console.log("oi")}><FaShoppingCart /></Button>
            {signed && <Button variant="text" onClick={() => onLogout()}>Olá {user.name}, Sair</Button>}
          </Styled.ActionsContainer>
      </Styled.BorderedContainer>
    </Styled.Header>
  )
}

export default Navbar