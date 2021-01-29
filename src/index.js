import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import state from "./redux/state";

let recentFriends = [
    {
        src: '/messages/IvanGlebov',
        name: "Ivan",
        surname: "Glebov",
        imgSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQYWj8d2vOIvQsu6KCVpu8e77DT7_WPfwLw&usqp=CAU"
    },
    {
        src: '/messages/Ksusha',
        name: "Ksusha",
        surname: 'Tests',
        imgSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQYWj8d2vOIvQsu6KCVpu8e77DT7_WPfwLw&usqp=CAU"
    },
    {
        src: '/messages/Really',
        name: "Really",
        surname: 'Glebov3',
        imgSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQYWj8d2vOIvQsu6KCVpu8e77DT7_WPfwLw&usqp=CAU"
    }
]


ReactDOM.render(
    <React.StrictMode>
        <App state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
