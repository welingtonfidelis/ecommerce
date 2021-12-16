import { useEffect } from "react";
import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine} from 'react-icons/ri';
import { maskDate, maskValue } from "../../util";
import { useAuth } from "../../store/auth-context";
import { useOrder } from "../../store/order-context";

import Modal from "../../components/Atoms/Modal/Modal";

import * as Styled from "./Orders.styled";
import OrderDetail from "../../components/Molecules/OrderDetail/OrderDetail";

const Orders = () => {
  const { user } = useAuth();
  const { 
    list, 
    currentOrder, 
    onClearCurrentOrder, 
    onGetOrderList, 
    onGetOrderById 
  } = useOrder();

  useEffect(() => {
    if (user?.id) onGetOrderList(user?.is_admin, user?.id);
  }, [user?.id, user?.is_admin, onGetOrderList]);

  const handleShowProducts = (id) => {
    onGetOrderById(id)
  }
  return (
    <>
      <Styled.Container>
        <h1>{user?.is_admin ? "Pedido dos clientes" : "Meus pedidos"}</h1>
        <Styled.List>
          {list.map((item) => {
            const { order, products } = item;
            const price = products.reduce(
              (acc, item) => (acc += item.price * item.quantity),
              0
            );

            return (
              <Styled.ListItemContainer key={order.id} onClick={() => handleShowProducts(order.id)}>
                <Styled.Text>Número: {order.id}</Styled.Text>
                <Styled.Text>Data: {maskDate(new Date(order.created_at))}</Styled.Text>
                <Styled.Text>Valor total: {maskValue(price)}</Styled.Text>
                <Styled.Text>
                  Status: {order.approved ? <RiCheckboxCircleFill/> : <RiCheckboxBlankCircleLine/>}
                </Styled.Text>
              </Styled.ListItemContainer>
            );
          })}
        </Styled.List>
      </Styled.Container>
      <Modal isActive={currentOrder}>
        <OrderDetail isAdmin={user.is_admin} detailedOrder={currentOrder} onClose={onClearCurrentOrder} />
      </Modal>
    </>
  );
};

export default Orders;
