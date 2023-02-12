import {Button, Pagination} from "@mui/material";
import {useStore} from "../../mobx/store";
import {useEffect} from "react";
import c from "./PostsPage.module.sass"
import {observer} from "mobx-react-lite";
import {useNavigate, useParams} from "react-router-dom";
import {ROUTE_POSTS, ROUTE_USERS} from "../../constants/routes";
import {PostsPageList} from "./PostsPageList/PostsPageList";
import {MainLoader} from "../../common/loaders/MainLoader";


export const PostsPage = observer(() => {
    const {postsPageStore} = useStore();
    const params = useParams();
    const navigate = useNavigate();
    const isPostsListLoading = postsPageStore.getIsPostsLoading();
    useEffect(() => {
            if (params.user_id && params.posts_page) {
                postsPageStore.loadPostsListAsyncAction(
                    params.user_id.substring(1).substring(0, params.user_id.length - 2),
                    params.posts_page)
            }
        }, [params.user_id, params.posts_page, postsPageStore]
    );

    const handlePageChange = (e: any, value: number) => {
        if (params.users_page && params.user_id && params.posts_page) {
            navigate(`${ROUTE_USERS}${params.users_page}${ROUTE_POSTS}${params.user_id}${value.toString()}`);
        }
    }

    return (
        <div
            className={c.PostsPage}
        >
            <div
                className={c.PostsPageContent}
            >
                {isPostsListLoading
                    ?
                    <div>
                        <MainLoader/>
                    </div>
                    :
                    <PostsPageList/>
                }
            </div>

            <Pagination
                className={c.PostsPagePagination}
                count={20}
                color={"primary"}
                onChange={handlePageChange}
            />
        </div>
    )
})