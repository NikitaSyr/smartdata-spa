import {observer} from "mobx-react-lite";
import {useStore} from "../../../../../../mobx/store";
import c from "./CommentsPageList.module.sass"
import {CommentsPageListItem} from "./Item/CommentsPageListItem";
import React from "react";

interface IProps {
    post_id: string
}

export const CommentsPageList: React.FC<IProps> = observer(({post_id}) => {
    const {postsPageStore} = useStore()
    const commentsList = postsPageStore.getCommentsListForPost(post_id)

    const commentsListData = commentsList.map(item => {
            return (
                <CommentsPageListItem
                    item={item}
                />
            )
        }
    )

    return (
        <>
            {commentsListData}
        </>
    )
})