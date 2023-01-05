import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { PokemonApp } from "./features/pokemon/pokemonApp";
import { TodoApp } from "./components/todo/TodoApp";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp/> */}
      <TodoApp/>

    </Provider>,
  </React.StrictMode>
);
