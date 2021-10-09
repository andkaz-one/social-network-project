import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPostMessage, state} from "./redux/State";

export let renderPage = () => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPostMessage={addPostMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
    ;

}