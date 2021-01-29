import s from "./Friend.module.css";
import {NavLink} from "react-router-dom";

const Friend = (data) =>{

    return(
        <NavLink className={s.friend} to={data.src}>
            <div className={s.content}>
                <img src={data.imgSrc}/>
                <div className={s.friendName}>
                    {data.name}
                </div>
            </div>
        </NavLink>
    );
}

export default Friend;