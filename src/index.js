import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './layouts/App';
import reducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js/dist/umd/popper.min';
import './assets/fontawesome-free-5.8.1-web/css/all.min.css';
import './assets/css/style.css';

const store = createStore(reducer);
const hist = createBrowserHistory();


ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Switch>
                <Route path="/app" render={() => <App/> }/>
                <Redirect to="/app/home" from="/"/>
            </Switch>
        </Router>
    </Provider>,
    document.querySelector('#root')
)