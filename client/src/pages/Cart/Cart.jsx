import Button from "../../components/Atoms/Button/Button";
import ProductTable from "../../components/Molecules/ProductTable/ProductTable";
import { useCart } from "../../store/cart-context";
import { useAuth } from "../../store/auth-context";

import * as Styled from "./Cart.styled";

const Cart = () => {
  const { cart, onRemoveFromCart, onSubmitCart } = useCart();
  const { user } = useAuth();

  const onSubmit = async (event) => {
    event.preventDefault();
    onSubmitCart(user?.id);
  };

  return (
    <Styled.Container>
      <h1>Meu carrinho de compras</h1>
      <Styled.Form onSubmit={onSubmit} direction="column">
        <ProductTable list={cart} onRemoveAction={onRemoveFromCart} />
        <Button type="submit">Finalizar pedido</Button>
      </Styled.Form>
    </Styled.Container>
  );
};

export default Cart;
