import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './styles/global.scss';

import Homepage from './components/views/homepage/Hompage';
import ProductPage from './components/views/productpage/Productpage';
import Cart from './components/views/cartpage/Cartpage';
import MainLayout from './components/layout/mainLayout/MainLayout';

const App = (props) => (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/product/:id'} component={ProductPage} />
          <Route exact path={'/cart'} component={Cart} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
);

export default App;