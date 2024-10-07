import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client'; 
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers";
import './index.css';
import App from './App';
import Analytics from './Analytics';


const store = createStore(reducers, compose(applyMiddleware(thunk)));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//     <Analytics />
//   </Provider>
// );



const rootElement = document.getElementById('root');

// The app component tree
const app = (
  <Provider store={store}>
    <App />
    <Analytics />
  </Provider>
);

if (rootElement.hasChildNodes()) {
  // Hydrate for SSR
  hydrateRoot(rootElement, app);
} else {
  // Client-side rendering
  const root = createRoot(rootElement);
  root.render(app);
}
