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
        <>
          <Button variant="text" onClick={() => navigate("/products")}>
            <FaBook /> Criar Produto
          </Button>
        </>
      );
    }
  }

  function renderButtonsByLoggingStatus() {
    const buttonGroup = [
      <Button variant="text" onClick={() => navigate("/")}>
        <RiStore3Fill /> Loja
      </Button>,
      <Button variant="text" onClick={() => navigate("/orders")}>
        <RiFileListFill /> Pedidos
      </Button>,
      <Button variant="text" onClick={() => navigate("/cart")}>
        <Badge value={cart.length}>
          <FaShoppingCart />
        </Badge>
        Carrinho
      </Button>,
    ];

    if (signed) {
      if (user?.is_admin) {
        delete buttonGroup[2];
      }
      buttonGroup.push(
        <Button variant="text" onClick={() => onLogout()}>
          <RiLogoutBoxFill /> Sair
        </Button>
      );
    } else {
      delete buttonGroup[1];

      buttonGroup.push(
        <Button variant="text" onClick={() => navigate("/signin")}>
          <RiLoginBoxFill /> Logar
        </Button>
      );
    }

    return buttonGroup;
  }

  return (
    <Styled.Header>
      <Styled.BorderedContainer>
        <Button variant="text" onClick={() => navigate("/")}>
          <Logo />
        </Button>
        <Styled.ActionsContainer>
          {signed && <span>Olá {user.name}!</span>}
          {renderButtonByRole()}
          {renderButtonsByLoggingStatus()}
        </Styled.ActionsContainer>
      </Styled.BorderedContainer>
    </Styled.Header>
  );
};

export default Navbar;
