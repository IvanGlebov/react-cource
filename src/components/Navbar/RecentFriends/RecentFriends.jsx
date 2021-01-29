
import Friend from "./Friend/Friend";
import s from './RecentFriends.module.css'

const RecentFriends = (data) => {

    let recentFriendsElements = data.recentFriends
        .map(friend => <Friend name={friend.name} src={friend.src} imgSrc={friend.imgSource}/>)

    return (
        <div className={s.recentFriends}>
            {recentFriendsElements}
        </div>
    )
}

export default RecentFriends;