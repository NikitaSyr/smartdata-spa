import {Pagination} from "@mui/material";
import {useStore} from "../../mobx/store";
import {useEffect} from "react";
import c from "./UsersPage.module.sass"
import {observer} from "mobx-react-lite";
import {useNavigate, useParams} from "react-router-dom";
import {ROUTE_USERS} from "../../constants/routes";
import {UsersPageList} from "./UsersPageList/UsersPageList";
import {MainLoader} from "../../common/loaders/MainLoader";

export const UsersPage = observer(() => {
    const {usersPageStore} = useStore();
    const params = useParams()
    const navigate = useNavigate()

    const isUsersListLoading = usersPageStore.getIsUsersLoading()
    useEffect(() => {
            if (params.users_page) {
                usersPageStore.loadUsersListAsyncAction(params.users_page.substring(1))
            }
        }, [params.users_page, usersPageStore]
    );

    const handlePageChange = (e: any, value: number) => {
        if (params.users_page) {
            navigate(`${ROUTE_USERS}:${value.toString()}`);
        }
    }

    return (
        <div
            className={c.UsersPage}
        >
            <div
                className={c.UsersPageContent}
            >
                {isUsersListLoading
                    ?
                    <div>
                        <MainLoader/>
                    </div>
                    :
                    <UsersPageList/>
                }
            </div>

            <Pagination
                className={c.UsersPagePagination}
                count={20}
                color={"primary"}
                onChange={handlePageChange}
            />
        </div>
    )
})