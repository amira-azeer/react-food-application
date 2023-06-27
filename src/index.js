import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './shared/RTK-queries';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

const store = configureStore({ // Redux Store initialized 
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware)
});

setupListeners(store.dispatch); 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>

      <ApiProvider api={api}>
        <App />
      </ApiProvider>    

    </Provider>
  
  </React.StrictMode>
);

