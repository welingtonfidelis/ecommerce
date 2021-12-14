import React, { useState, useEffect, useContext } from 'react';
import { api } from "../services/api";

const ProductContext = React.createContext({
    list: [],
    onGetList: () => {},
});

// Named export.
export const ProductContextProvider = (props) => {
    const [list, setList] = useState([]);

    const getList = async () => {
        const { data } = await api.get("/products");
        
        if(data) {
            setList(data);
        }
    }

    useEffect(() => {
        
    }, [])

    return (
        <ProductContext.Provider value={{ list, onGetList: getList }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export function useProduct() {
    const context = useContext(ProductContext);
    return context;
}