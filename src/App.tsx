import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Sett} from "./components/Sett/Sett";
import {RootStateType} from "./redux/State";


type propsType = {
    state: RootStateType
    addPostMessage: (postMessage: string) => void
}

const App = ( {addPostMessage,...props}: propsType) => {
    let postsData = props.state.profilePage.postsData
    let dialogsData = props.state.dialogsPage.dialogsData
    let messagesData = props.state.dialogsPage.messagesData
    let friendsLogo = props.state.sidebar


    return (
        <div className="App">
            <Header />
            <Navbar friendsLogo={friendsLogo}/>
            <div className="AppContent">
                <Route path={'/profile'} render={ () => <Content postsData={postsData} addPostMessage={addPostMessage}/>}/>
                <Route path={'/messages'} render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/> }/>
                <Route path={'/news'} render={ () => News}/>
                <Route path={'/settings'} render={ () => Sett}/>
            </div>
        </div>
    );
}

export default App;
