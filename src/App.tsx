import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Sett} from "./components/Sett/Sett";
import {rootReducerType, RootStateType, TypeOfAC} from './redux/store';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ContentContainer} from "./components/Content/ContentContainer";
import {Users} from "./components/Users/Users";

type propsType = {
    /*state: rootReducerType*/
    /*dispatch: (action: TypeOfAC) => void*/
}

const App = (props: propsType) => {

   /* let postsData = props.state.profilePage.postsData*/
   /* let dialogsData = props.state.dialogsPage.dialogsData
    let messagesData = props.state.dialogsPage.messagesData*/
    /*let friendsLogo = props.state.sidebar*/
    /*let newMessageText = props.state.dialogsPage.newMessageText*/

    return (
        <div className="App">
            <Header />
            <Navbar />
            <div className="AppContent">
                <Route path={'/profile'} render={ () => <ContentContainer />}/>
                <Route path={'/messages'} render={() => <DialogsContainer />}/>
                <Route path={'/users'} render={() => <Users />}/>
                <Route path={'/news'} render={ () => News}/>
                <Route path={'/settings'} render={ () => Sett}/>
            </div>
        </div>
    );
}

export default App;
