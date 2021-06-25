import React from "react";
import { Provider } from "react-redux";
import App from "./navigations";
import store from "./statemanagement/index";

export default () => <Provider store={store}>
                        <App/>
                    </Provider>;