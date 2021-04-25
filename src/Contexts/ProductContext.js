import React from "react";

const ProductContext=React.createContext();
const ProductContextProvider=ProductContext.Provider;
const ProductContextConsumer=ProductContext.Consumer;

export {ProductContextProvider,ProductContextConsumer};