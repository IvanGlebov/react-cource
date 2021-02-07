import s from './Users.module.css'
import User from "./User/User";
import axios from "axios";

const Users = (data) => {
    debugger;
    if (data.displayedUsers.length === 0) {
    
        axios.get("https://freeder.com/api/1.0/users").then(response => {
            debugger;
            data.setUsers(response)
        })

        data.setUsers([
            {
                id: 1,
                name: 'Simple Name',
                profileImageSrc: 'https://c4.wallpaperflare.com/wallpaper/1003/863/810/anime-anime-girls-digital-art-artwork-vertical-hd-wallpaper-preview.jpg',
                location: {city: 'Moscow', country: 'Russia'},
                status: "I'm fast af boi",
                followed: false
            },
            {
                id: 2,
                name: 'Simple Name',
                profileImageSrc: 'https://i.pinimg.com/736x/20/20/21/2020210ba75b141693c2510a362c4384.jpg',
                location: {city: 'Moscow', country: 'Russia'},
                status: "I'm fast af boi",
                followed: true
            }
        ])
    }
    debugger;
    let usersElements = data.displayedUsers.map(user =>
        <User id={user.id} follow={data.follow} unfollow={data.unfollow} key={user.id} profileImageSrc={user.profileImageSrc} name={user.name} status={user.status} location={user.location} followed={user.followed}  />
    )
    return (
        <div>
            {usersElements}
        </div>
    )
}

export default Users