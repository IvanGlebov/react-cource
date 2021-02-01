import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Misuc/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App(data) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar recentFriends={data.state.navbar.recentFriends}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'  render={() => <Profile store = {data.store}/>}/>
                <Route path='/messages' render={() => <DialogsContainer store = {data.store}/>}/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
            </div>
        </div>
    );
}

export default App;
