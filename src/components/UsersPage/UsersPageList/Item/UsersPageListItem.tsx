import c from "./UsersPageListItem.module.sass";
import {IUserData} from "../../Types/usersPageTypes";
import React from "react";
import {useNavigate} from "react-router-dom";
import {ROUTE_POSTS} from "../../../../constants/routes";

interface IProps {
    item: IUserData
}

export const UsersPageListItem: React.FC<IProps> = ({item}) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`.${ROUTE_POSTS}:${item.id}:1`)
    }

    return (
        <div
            className={c.UsersPageListItem}
            key={item.id}
            onClick={handleNavigate}
        >
            <div
                className={c.UsersPageListItemLeftBlock}
            >
                <div
                    className={c.UsersPageListItemLeftBlockVoid}
                />
                <div
                    className={c.UsersPageListItemLeftBlockLayout}>
                    <div
                    >
                        Имя: {item.name}
                    </div>
                    <div>
                        Пол: {item.gender}
                    </div>
                </div>

            </div>
            <div
                className={c.UsersPageListItemRightBlock}
            >
                <div
                    className={c.UsersPageListItemRightBlockVoid}
                />
                <div
                    className={c.UsersPageListItemRightBlockLayout}
                >
                    <div>
                        Email: {item.email}
                    </div>
                    <div>
                        Статус:
                        {item.status === "active" && " Активный"}
                        {item.status === "inactive" && " Неактивный"}
                        {((item.status !== "active") && (item.status !== "inactive")) && " Неизвестен"}
                    </div>
                </div>

            </div>
        </div>
    )
}