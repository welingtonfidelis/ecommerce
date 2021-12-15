import React, { useState, useEffect, useContext } from 'react';
import { api } from "../services/api";

const CartContext = React.createContext({
    cart: [],
    onAddToCart: () => {},
    onRemoveFromCart: (id) => {},
    onSubmitCart: (user_id) => {}
});

// Named export.
export const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        let tempCart = [];
        const storedCart = localStorage.getItem('@App:cart');

        if (storedCart) tempCart = JSON.parse(storedCart);

        let inCart = false;

        tempCart = tempCart.map(item => {
            if (item.id === product.id) {
                item.quantity += 1;
                inCart = true;
            }

            return item;
        });

        if (!inCart) tempCart.push({ ...product, quantity: 1 });

        setCart(tempCart);
        localStorage.setItem('@App:cart', JSON.stringify(tempCart));
    }

    const removeFromCart = (id) => {
        let tempCart = cart.filter(item => item.id !== id);

        setCart(tempCart);

        localStorage.setItem('@App:cart', JSON.stringify(tempCart));
    }

    const submitCart = async (userId) => {
        if(!userId) {
            alert("Você precisa estar logado para enviar seu pedido.");
            return;
        }
        if (!cart.length) {
            alert("Seu carrinho está vazio.");
            return;
        }

        try {
            const { data } = await api.post("/orders", {
                user_id: userId,
                products: cart.map((item) => ({
                    id: item.id,
                    quantity: item.quantity,
                })),
            });

            if (data && data.id) {
                setCart([]);
                localStorage.setItem('@App:cart', JSON.stringify([]));
                alert("Pedido enviado");
            }
        } catch (error) {
            console.log(error);
            alert("Houve um erro ao enviar seu pedido.");
        }
    }

    useEffect(() => {
        const storedCart = localStorage.getItem('@App:cart');

        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, [])

    return (
        <CartContext.Provider value={{
            cart, onAddToCart: addToCart, onRemoveFromCart: removeFromCart, onSubmitCart: submitCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext);
    return context;
}