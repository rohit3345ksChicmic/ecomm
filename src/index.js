import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Components/App/App';
import '../src/Components/App/App.css';
import { BrowserRouter } from 'react-router-dom';
import { store,persistor } from './reduxxx/Store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


