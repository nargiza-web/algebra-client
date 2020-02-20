import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contactus from './components/Contactus'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import  reducer from './store/reducer'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path ="/" component = {App} />
          <Route path = "/home" component = {App}/>
          <Route path = "/contactus" component = {Contactus}/>
        </Switch>
      </BaseLayout>
    </BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
