import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Sett} from "./components/Sett/Sett";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ContentContainer} from "./components/Content/ContentContainer";
import {UsersContainer} from "./components/Users/UsersContainer";



const App = () => {


    return (
        <div className="App">
            <Header />
            <Navbar />
            <div className="AppContent">
                <Route path={'/profile'} render={ () => <ContentContainer />}/>
                <Route path={'/messages'} render={() => <DialogsContainer />}/>
                <Route path={'/users'} render={() => <UsersContainer />}/>
                <Route path={'/news'} render={ () => News}/>
                <Route path={'/settings'} render={ () => Sett}/>
            </div>
        </div>
    );
}

export default App;
