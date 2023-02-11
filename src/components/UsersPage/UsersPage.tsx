import {Button} from "@mui/material";
import {useStore} from "../../mobx/store";
import {useEffect} from "react";
import c from "./UsersPage.module.sass"

export const Foo = () => {
    const {usersPageStore} = useStore();
    console.log("render")
    const usersList= usersPageStore.getUsersList()
    console.log(usersList)
    const usersListData = usersList.map(item => {
            return (
                <div
                    key={item.id}
                >
                    {item.name}
                </div>
            )
        }
    )

    return (
        <>
            {usersListData}
        </>
    )
}

export const UsersPage = () => {
    const {usersPageStore} = useStore();
    const loadUsers = () => {
        const data = usersPageStore.loadUsersListAsyncAction("1")
    }
    const isUsersPageLoading = usersPageStore.usersPageData.isUsersListLoading
    console.log(isUsersPageLoading)
    // console.log(usersPageStore.usersList)

    console.log(usersPageStore)

    // useEffect(() => {
    //     usersPageStore.loadUsersListAsyncAction("1")
    //     }, [usersPageStore, usersPageStore.usersPageData.usersList]
    // )

    const f = usersPageStore.getUsersList()
    console.log(f)

    // console.log(usersPageStore.usersPageData.foo)

    // const usersListData = usersData.map(item => {


    return (
        <div
            className={c.UserPage}
        >
            <Button
                onClick={loadUsers}
            >
                Жмак
            </Button>
            {/*{isUsersPageLoading*/}
            {/*    ?*/}
            {/*    <div>Loading</div>*/}
            {/*    :*/}
            <Foo/>
            {/*}*/}
        </div>
    )
}