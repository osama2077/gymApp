import { createStore, applyMiddleware } from "redux";
import createMiddleWareSaga from "redux-saga";

import reducers from "./reducers/index";
import sagas from "./sagas/index";

const sagaMiddleWare = createMiddleWareSaga();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(sagas);

export default store;
