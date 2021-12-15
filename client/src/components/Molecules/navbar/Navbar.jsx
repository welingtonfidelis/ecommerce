import { useNavigate } from "react-router-dom";
import {
  RiFileListFill,
  RiLogoutBoxFill,
  RiLoginBoxFill,
  RiStore3Fill,
} from "react-icons/ri";
import { FaBook, FaShoppingCart } from "react-icons/fa";

import Badge from "../../Atoms/Badge/Badge";
import Button from "../../Atoms/Button/Button";
import Logo from "../../Atoms/Logo/Logo";
import { useAuth } from "../../../store/auth-context";
import { useCart } from "../../../store/cart-context";

import * as Styled from "./Navbar.styled";

const Navbar = () => {
  const { signed, user, onLogout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  function renderButtonByRole() {
    if (user?.is_admin) {
      return (
        <Button variant="text" onClick={() => navigate("/products")}>
          <FaBook /> Registrar Produto
        </Button>
      )
    }
    else {
      return (
      <Button variant="text" onClick={() => navigate("/cart")}>
        <Badge value={cart.length}>
          <FaShoppingCart />
        </Badge>
        Carrinho
      </Button>
      )
    }
  }

  function renderButtonsByLoggingStatus() {
    if (signed) {
      return (
        <>
          <Button variant="text" onClick={() => navigate("/orders")}>
            <RiFileListFill /> Pedidos
          </Button>
          <Button variant="text" onClick={() => onLogout()}>
            <RiLogoutBoxFill /> Sair
          </Button>
        </>
      )
    }

    return (
      <Button variant="text" onClick={() => navigate("/signin")}>
        <RiLoginBoxFill /> Acessar
      </Button>
    )
  }

  return (
    <Styled.Header>
      <Styled.BorderedContainer>
        <Styled.NameContainer>
          <Logo />
          {signed && <span>Olá {user.name}!</span>}
        </Styled.NameContainer>
        <Styled.ActionsContainer>
          <Button variant="text" onClick={() => navigate("/")}>
            <RiStore3Fill /> Loja
          </Button>
          {renderButtonByRole()}
          {renderButtonsByLoggingStatus()}
        </Styled.ActionsContainer>
      </Styled.BorderedContainer>
    </Styled.Header>
  );
};

export default Navbar;
