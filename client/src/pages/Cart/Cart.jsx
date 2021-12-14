import { FaTrashAlt } from "react-icons/fa";
import Button from "../../components/Atoms/Button/Button";
import { maskValue } from "../../util";
import { useCart } from "../../store/cart-context";

import * as Styled from "./Cart.styled";

const Cart = () => {
  const { cart, onRemoveFromCart, onSubmitCart } = useCart();

  const onSubmit = async (event) => {
    event.preventDefault();
    onSubmitCart();
  };

  return (
    <Styled.Container>
      <h1>Meu carrinho de compras</h1>
      <Styled.Form onSubmit={onSubmit} direction="column">
        <Styled.TableContainer>
          <Styled.Table>
            <tr>
              <Styled.TableTh>Imagem</Styled.TableTh>
              <Styled.TableTh>Nome</Styled.TableTh>
              <Styled.TableTh>Preço</Styled.TableTh>
              <Styled.TableTh>Quantidade</Styled.TableTh>
              <Styled.TableTh>Ação</Styled.TableTh>
            </tr>
            {cart.map((product) => {
              return (
                <tr>
                  <Styled.TableTd width={"10%"}>
                    <img src={product.image} alt={product.name} image />
                  </Styled.TableTd>
                  <Styled.TableTd>{product.name}</Styled.TableTd>
                  <Styled.TableTd width={"15%"}>
                    {maskValue(product.value)}
                  </Styled.TableTd>
                  <Styled.TableTd width={"10%"}>
                    {product.quantity}
                  </Styled.TableTd>
                  <Styled.TableTd width={"10%"}>
                    <FaTrashAlt
                      title="Remover do carrinho"
                      onClick={() => onRemoveFromCart(product.id)}
                    />
                  </Styled.TableTd>
                </tr>
              );
            })}
          </Styled.Table>
        </Styled.TableContainer>
        <Button type="submit">Finalizar pedido</Button>
      </Styled.Form>
    </Styled.Container>
  );
};

export default Cart;
