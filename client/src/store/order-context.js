import React, { useState, useContext, useCallback } from "react";
import { api } from "../services/api";

const OrderContext = React.createContext({
  list: [],
  currentOrder: undefined,
  setCurrentOrder: (item) => {},
  onClearCurrentOrder: () => {},
  onGetOrderList: (isAdmin, userId) => {},
  onApproveOrder: (orderId) => {},
});

// Named export.
export const OrderContextProvider = (props) => {
  const [list, setList] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(undefined);

  const getList = useCallback(async (isAdmin, userId) => {
    try {
      let data = [];
      if (isAdmin) {
        const response = await api.get("/orders");

        data = response.data;
      } else {
        const response = await api.get(`/orders/users/${userId}`);

        data = response.data;
      }

      if (data) {
        setList(data);
      }
    } catch (error) {
      console.log(error);
      alert("Houve um erro ao trazer a lista de pedidos.");
    }
  }, []);

  const approveOrder = useCallback(async (orderId) => {
    try {
      const response = await api.patch(`/orders/status/${orderId}`, {
        status: true,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Houve um erro ao aprovar o pedido");
    }
  }, []);

  return (
    <OrderContext.Provider
      value={{
        list,
        currentOrder,
        setCurrentOrder: (order) => setCurrentOrder(order),
        onClearCurrentOrder: () => setCurrentOrder(null),
        onGetOrderList: getList,
        onApproveOrder: (orderId) => approveOrder(orderId),
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export function useOrder() {
  const context = useContext(OrderContext);
  return context;
}
