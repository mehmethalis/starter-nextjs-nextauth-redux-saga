import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers"
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, {},
    composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store