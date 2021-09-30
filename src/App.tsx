import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Sett} from "./components/Sett/Sett";


type propsType ={
    dialogsData: Array<dialog>
    messagesData: Array<message>
    postsData: Array<post>
}

export type dialog = {
    id: number
    name: string
}

export type message = {
    id: number
    message: string
}

export type post = {
    id: number
    message: string
    like: number
}


const App = ({dialogsData, messagesData, postsData, ...props}: propsType) => {

    return (
        <div className="App">
            <Header />
            <Navbar/>
            <div className="AppContent">
                <Route path={'/profile'} render={ () => <Content postsData={postsData}/>}/>
                <Route path={'/messages'} render={() => <Dialogs
                    dialogsData={dialogsData}
                    messagesData={messagesData} />}/>
                <Route path={'/news'} render={ () => News}/>
                <Route path={'/settings'} render={ () => Sett}/>
            </div>
        </div>
    );
}

export default App;
