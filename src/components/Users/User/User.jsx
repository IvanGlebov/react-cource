import s from "./User.module.css";

const User = (data) => {

    // debugger;
    return (
        <div className={s.userContainer}>
            <div className={s.userImage}>
                <img src={data.profileImageSrc}/>
            </div>
            <div className={s.userInfo}>
                <div className={s.userName}>{data.name}</div>
                <div className={s.status}>{data.status}</div>
                <div className={s.location}>
                    <div className={s.country}>{data.location.country},</div>
                    <div className={s.city}> {data.location.city}</div>
                </div>
            </div>
            <div className={s.followUnfollow}>
                {data.followed
                    ? <button onClick={() => {data.unfollow(data.id)}} className={s.followed}>Unfollow</button>
                    : <button onClick={() => {data.follow(data.id)}} className={s.unfollowed}>Follow</button>}
            </div>
        </div>
    )
}

export default User