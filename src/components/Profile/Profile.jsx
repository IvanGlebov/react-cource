import React from 'react'
import profileImage from "./images/iota2.png"
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (data) => {
    // debugger;
    let state = data.store.getState()
    return (
        <div>
            <div className={s.profileWallpaper}>
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg"/>
            </div>
            <div className={s.personalInfo}>
                <div className={s.avatar}>
                    <img src={profileImage}/>
                </div>
                <div className={s.description}>
                    <div className={s.name}>
                        {state.profilePage.user.name}
                    </div>
                    <div className={s.birthDate}>
                        Born in {state.profilePage.user.birthDate}
                    </div>
                    <div className={s.city}>
                        Lives in {state.profilePage.user.city}
                    </div>
                </div>
            </div>

            <MyPostsContainer store={data.store} />
        </div>
    );
}

export default Profile