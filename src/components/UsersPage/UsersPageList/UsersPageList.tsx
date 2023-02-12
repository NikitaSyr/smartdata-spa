import {observer} from "mobx-react-lite";
import {useStore} from "../../../mobx/store";
import c from "./UsersPageList.module.sass"
import {UsersPageListItem} from "./Item/UsersPageListItem";

export const UsersPageList = observer(() => {
    const {usersPageStore} = useStore();
    const usersList = usersPageStore.getUsersList()

    const usersListData = usersList.map(item => {
            return (
                <UsersPageListItem
                    item={item}
                />
            )
        }
    )

    return (
        <>
            {usersListData}
        </>
    )
})