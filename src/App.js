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
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

export default App;
