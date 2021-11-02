import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/store";
import {RootStateType} from "./redux/State";



let renderPage = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderPage(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderPage(state)
})


reportWebVitals();
