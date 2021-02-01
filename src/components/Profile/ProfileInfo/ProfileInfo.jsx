import s from "./ProfileInfo.module.css";
import profileImage from "../images/iota2.png";

const ProfileInfo = (data) => {
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
                        {data.user.name}
                    </div>
                    <div className={s.birthDate}>
                        Born in {data.user.birthDate}
                    </div>
                    <div className={s.city}>
                        Lives in {data.user.city}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo