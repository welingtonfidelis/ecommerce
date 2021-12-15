import { maskValue } from "../../util";
import { useAuth } from "../../store/auth-context";
import { useOrder } from "../../store/order-context";

import * as Styled from "./Orders.styled";
import { useEffect } from "react";

const Orders = () => {
  const { user } = useAuth();
  const { list, onGetOrderList } = useOrder();

  useEffect(() => {
    if(user?.id) onGetOrderList(user?.is_admin, user?.id);
  }, [user?.id]);

  return (
    <Styled.Container>
      <h1>{user?.is_admin ? "Pedido dos clientes" : "Meus pedidos"}</h1>
        {list.map(item => {
          return (
            <div>
              {item.order.created_at}
            </div>
          )
        })}
    </Styled.Container>
  )
}

export default Orders