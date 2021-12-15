import React, { useState, useContext, useCallback } from "react";
import { api } from "../services/api";

const OrderContext = React.createContext({
  list: [],
  currentOrder: undefined,
  onClearCurrentOrder: () => {},
  onGetOrderList: (isAdmin, userId) => {},
  onGetOrderById: (orderId) => {},
});

// Named export.
export const OrderContextProvider = (props) => {
  const [list, setList] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(undefined);

  const getList = useCallback(async (isAdmin, userId) => {
    try {
      let data = [];
      if (isAdmin) {
        const response = await api.get("/orders?status=false");

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

  const getOrderById = useCallback(async (orderId) => {
    try {
      const response = await api.get(`/orders/users/${orderId}`);

      if (response.data) {
        setCurrentOrder(response.data[0]);
      }
    } catch (error) {
      console.log(error);
      alert("Houve um erro ao trazer os detalhes do pedido.");
    }
  }, []);

  return (
    <OrderContext.Provider
      value={{
        list,
        currentOrder,
        onClearCurrentOrder: () => setCurrentOrder(null),
        onGetOrderList: getList,
        onGetOrderById: getOrderById,
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
