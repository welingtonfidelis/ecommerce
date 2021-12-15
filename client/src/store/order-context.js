import React, { useState, useEffect, useContext } from 'react';
import { api } from "../services/api";

const OrderContext = React.createContext({
    list: [],
    onGetOrderList: (isAdmin, userId) => { },
});

// Named export.
export const OrderContextProvider = (props) => {
    const [list, setList] = useState([]);

    const getList = async (isAdmin, userId) => {
        try {
            let data = [];
            if (isAdmin) {
                const response = await api.get("/orders?status=false");

                data = response.data;
            }
            else {
                const response = await api.get(`/orders/users/${userId}`);

                data = response.data;
            }

            if (data) {
                setList(data);
            }

        } catch (error) {
            console.log(error);
            alert("Houve um erro ao trazer a lista de pedidos.")
        }
    }

    return (
        <OrderContext.Provider value={{ list, onGetOrderList: getList }}>
            {props.children}
        </OrderContext.Provider>
    )
}

export function useOrder() {
    const context = useContext(OrderContext);
    return context;
}