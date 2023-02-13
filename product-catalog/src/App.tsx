import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";
import About from "./About";
import { Provider } from "react-redux";
import { store } from "./reducers";
import Menu from "./Menu";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Menu />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="About" element={<About />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
