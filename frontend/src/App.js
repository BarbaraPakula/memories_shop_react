import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/global.scss";

import Homepage from "./components/views/homepage/Hompage";
import ProductPage from "./components/views/productpage/Productpage";
import Cart from "./components/views/cartpage/Cartpage";
import MainLayout from "./components/layout/mainLayout/MainLayout";
import Order from "./components/views/order/Order";

const App = (props) => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path={"/"} component={Homepage} />
        <Route exact path={"/product/:id"} component={ProductPage} />
        <Route exact path={"/cart"} component={Cart} />
        <Route exact path={"/orders"} component={Order} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
