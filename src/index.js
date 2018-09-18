import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Player from 'components/Player';

import store from './store';
import Routes from './routes';

const Main = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <Player />
    </Fragment>
  </Provider>

);

export default Main;
