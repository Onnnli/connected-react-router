import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import { configureStore, history } from './redux/configureStore';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={First} />
        <Route exact path="/second" component={Second} />
        <Route exact path="/third" component={Third} />
        <Route path="*" render={() => (<h1>PAGE NOT FOUND</h1>)} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
