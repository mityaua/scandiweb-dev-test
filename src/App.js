import { Component } from 'react';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './components/Container';
import AppBar from './components/AppBar';
import Loader from './components/Loader';

import './App.css';

import routes from './routes';

const Category = lazy(() =>
  import('./pages/Category' /* webpackChunkName: "category-page" */),
);

const Product = lazy(() =>
  import('./pages/Product' /* webpackChunkName: "product-page" */),
);

const Cart = lazy(() =>
  import('./pages/Cart' /* webpackChunkName: "cart-page" */),
);

const Checkout = lazy(() =>
  import('./pages/Checkout' /* webpackChunkName: "checkout-page" */),
);

class App extends Component {
  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.home}>
              <Category />
            </Route>

            <Route exact path={routes.clothesProducts}>
              <Product />
            </Route>

            <Route exact path={routes.techProducts}>
              <Product />
            </Route>

            <Route exact path={routes.cart}>
              <Cart />
            </Route>

            <Route exact path={routes.checkout}>
              <Checkout />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

export default App;
