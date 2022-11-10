import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import StateProvider from "./context/stateContext";
import store from "./store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
//используем Provider для передачи состояния из стора
//в Provider value передаем объект UserStore с методами и свойствами
console.log(process.env.REACT_APP_API_URL);
root.render(
  <Provider store={store}>
    <StateProvider>
      <App />
    </StateProvider>
  </Provider>
);

reportWebVitals();
