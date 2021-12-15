import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';
import { ProductContextProvider } from './store/product-context';
import { CartContextProvider } from './store/cart-context';
import { OrderContextProvider } from './store/order-context';

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <OrderContextProvider>
            <App />
          </OrderContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);