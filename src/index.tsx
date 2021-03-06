import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import { store} from "./redux/store";
import {Provider} from "react-redux";


    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>

        </BrowserRouter>
</React.StrictMode>,
    document.getElementById('root')
)
    ;


/*renderPage(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderPage(state)
})*/


reportWebVitals();
