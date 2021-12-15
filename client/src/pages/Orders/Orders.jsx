import { useEffect } from "react";
import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine} from 'react-icons/ri';
import { maskDate, maskValue } from "../../util";
import { useAuth } from "../../store/auth-context";
import { useOrder } from "../../store/order-context";

import * as Styled from "./Orders.styled";

const Orders = () => {
  const { user } = useAuth();
  const { list, onGetOrderList } = useOrder();

  useEffect(() => {
    if (user?.id) onGetOrderList(user?.is_admin, user?.id);
  }, [user?.id]);

  const handleShowProducts = (products, client) => {
    if(user?.is_admin) console.log(client)

    console.log(products);
  }
  return (
    <Styled.Container>
      <h1>{user?.is_admin ? "Pedido dos clientes" : "Meus pedidos"}</h1>
      <Styled.List>
        {list.map((item) => {
          const { order, products, user } = item;
          const price = products.reduce(
            (acc, item) => (acc += item.price * item.quantity),
            0
          );

          return (
            <Styled.ListItemContainer onClick={() => handleShowProducts(products, user)}>
              <span>Número: {order.id}</span>
              <span>Data: {maskDate(new Date(order.created_at))}</span>
              <span>Valor total: {maskValue(price)}</span>
              <span>
                Status: {order.approved ? <RiCheckboxCircleFill/> : <RiCheckboxBlankCircleLine/>}
              </span>
            </Styled.ListItemContainer>
          );
        })}
      </Styled.List>
    </Styled.Container>
  );
};

export default Orders;
