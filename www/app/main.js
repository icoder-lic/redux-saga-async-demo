import React from "react";
import ReactDOM from "react-dom";
import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";



//组件
import App from "./containers/App";
import reducer from "./reducers";
//引入saga
import sagas from "./sagas/sagas";
//创建saga中间件
var sagaMiddleware = createSagaMiddleware();
//创建store
const store = createStore(reducer, applyMiddleware(logger,sagaMiddleware));
//运行saga
sagaMiddleware.run(sagas);


ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    ,
    document.getElementById("app")
)