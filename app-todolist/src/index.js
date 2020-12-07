import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppToDoList from "./Components/App";
import  myReducer from './redux/reducers/index';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './redux-saga/rootSagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    myReducer,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSagas)
ReactDOM.render(
    <Provider store={store}>
        <AppToDoList/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
