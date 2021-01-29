import React from 'react'
import profileImage from "./images/iota2.png"
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = (data) => {


    // debugger;
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
                        {data.profilePage.user.name}
                    </div>
                    <div className={s.birthDate}>
                        Born in {data.profilePage.user.birthDate}
                    </div>
                    <div className={s.city}>
                        Lives in {data.profilePage.user.city}
                    </div>
                </div>
            </div>

            <MyPosts postsData={data.profilePage.postsData} />

        </div>
    );
}

export default Profile;