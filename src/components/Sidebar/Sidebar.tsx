import {Button} from "@mui/material";
import {ROUTE_USERS} from "../../constants/routes";
import c from "./Sidebar.module.sass"
import usersLogo from "../../img/icons/user.svg";

export const Sidebar = () => {
    // const navigate = useNavigate();
    return (
        <div
            className={c.Sidebar}
        >
            <div
                className={c.SidebarItem}
            >
                <img
                    src={usersLogo}
                    alt={"Пользователи"}
                    className={c.SidebarItemImage}
                />
                <Button
                    href={`#${ROUTE_USERS}:1`}
                    color={"info"}
                    className={c.SidebarItemButton}
                >
                    Пользователи
                </Button>
            </div>
        </div>
    )
}