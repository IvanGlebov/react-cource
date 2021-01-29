import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Misuc/Music";
import Settings from "./components/Settings/Settings";


function App(data) {



    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar recentFriends={data.state.navbar.recentFriends}/>
                <div className='app-wrapper-content'>

                    <Route path='/profile'
                           render={() => <Profile profilePage={data.state.profilePage}/>}/>

                    <Route path='/messages'
                           render={() => <Dialogs messagesPage={data.state.messagesPage}/>}/>

                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
