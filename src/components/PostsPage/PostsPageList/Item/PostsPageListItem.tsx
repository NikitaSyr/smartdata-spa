import c from "./PostsPageListItem.module.sass";
import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ROUTE_COMMENTS, ROUTE_POSTS} from "../../../../constants/routes";
import {IPostData} from "../../Types/postsPageTypes";
import {Button} from "@mui/material";
import {useStore} from "../../../../mobx/store";
import {MainLoader} from "../../../../common/loaders/MainLoader";
import {CommentsPageList} from "./Comments/CommentsPageList/CommentsPageList";

interface IProps {
    item: IPostData
}

export const PostsPageListItem: React.FC<IProps> = ({item}) => {
    const {postsPageStore} = useStore();
    const params = useParams();

    const isCommentsLoading = postsPageStore.getIsCommentsForPostLoading(item.id);

    const handleShowComments = () => {
        postsPageStore.loadCommentsForPostListAsyncAction(item.id)
    }

    return (
        <>
            <div
                className={c.PostsPageListItem}
                key={item.id}
            >
                <div
                    className={c.PostsPageListItemLeftBlock}
                >
                    <div
                        className={c.PostsPageListItemLeftBlockVoid}
                    />
                    <div
                        className={c.PostsPageListItemLeftBlockLayout}>
                        <div>
                            {item.title}
                        </div>

                    </div>

                </div>
                <div
                    className={c.PostsPageListItemRightBlock}
                >
                    <div
                        className={c.PostsPageListItemRightBlockVoid}
                    />
                    <div
                        className={c.PostsPageListItemRightBlockLayout}
                    >
                        <div>
                            {item.body}
                        </div>
                    </div>

                </div>
                <Button
                    onClick={handleShowComments}
                >
                    Показать комментарии
                </Button>
            </div>
            {isCommentsLoading
                ?
                <div
                    className={c.PostsPageListItemLoader}
                >
                    <MainLoader/>
                </div>

                :
                <CommentsPageList
                    post_id={item.id}
                />
            }
        </>
    )
}