import React from 'react';

const CartContext=React.createContext();
const CartContextProvider=CartContext.Provider;
const CartContextConsumer=CartContext.Consumer;
export {CartContextConsumer,CartContextProvider};