import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Components/App/App';
import '../src/Components/App/App.css';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/store';
import { Provider } from 'react-redux';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


