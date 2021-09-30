import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


const dialogsData = [
    {id: 1, name: 'Andrei', },
    {id: 2, name: 'Viktoria', },
    {id: 3, name: 'John', },
]

const messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Whats up'},
    {id: 3, message: 'Hi'},
]

const postsData = [
    {id: 1, message: 'React', like: 45},
    {id: 2, message: 'JavaScript', like: 20},
    {id: 3, message: 'TypeScript', like: 30},
]




ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
