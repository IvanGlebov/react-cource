import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (data) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/messages/" + data.id}>{data.name}</NavLink>
        </div>
    );
}

export default Dialog