import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Sett} from "./components/Sett/Sett";

const App = (props: any) => {

    return (
        <div className="App">
            <Header />
            <Navbar/>
            <div className="AppContent">
                <Route path={'/profile'} component={Content}/>
                <Route path={'/messages'} component={Dialogs}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/settings'} component={Sett}/>
            </div>
        </div>
    );
}

export default App;
