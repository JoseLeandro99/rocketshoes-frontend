import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/globals';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer  autoClose={3000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
