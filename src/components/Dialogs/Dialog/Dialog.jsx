import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (data) => {
    return (
        <div className={s.dialog}>

            <NavLink to={"/messages/" + data.id}>
                <div className={s.grid}>
                    <img src="https://images5.alphacoders.com/100/thumb-1920-1002716.jpg" />
                    <div className={s.name}>
                        {data.name}
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default Dialog;