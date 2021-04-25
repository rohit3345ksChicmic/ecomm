import React from 'react';

const SearchContext=React.createContext();
const SearchContextProvider=SearchContext.Provider;
const SearchContextConsumer=SearchContext.Consumer;

export {SearchContextProvider,SearchContextConsumer};