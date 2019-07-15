import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import ListUser from './pages/user/ListUser';
import Posts from './pages/post/Posts';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exct path="/posts" component={Posts} />
            <Route exct path="/dashboard" component={Dashboard} />
            <Route exct path="/listuser" component={ListUser} />
            <Route exct path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
