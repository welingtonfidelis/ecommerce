import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Button from "../../components/Atoms/Button/Button";
import { api } from "../../services/api";
import { maskValue } from "../../util";
import * as Styled from "./Cart.styled";

const Cart = () => {
  const [productsInCart, setProductsInCart] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!productsInCart.length) {
      alert("Seu carrinho está vazio.");
      return;
    }

    try {
      const { data } = await api.post("/orders", {
        user_id: 1,
        products: productsInCart.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      });

      if (data && data.id) {
        setProductsInCart([]);
        alert("Pedido enviado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const tmpArray = [];

    for (let i = 1; i <= 20; i += 1) {
      tmpArray.push({
        id: i,
        name: "Produto " + i,
        value: 2.5,
        quantity: i,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
      });
    }

    setProductsInCart(tmpArray);
  }, []);

  const handleRemoveProduct = (id) => {
    const tmpArray = productsInCart.filter((item) => item.id !== id);
    setProductsInCart(tmpArray);
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
            {productsInCart.map((product) => {
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
                      onClick={() => handleRemoveProduct(product.id)}
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
