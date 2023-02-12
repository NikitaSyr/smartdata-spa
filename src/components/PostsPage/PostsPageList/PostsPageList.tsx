import {observer} from "mobx-react-lite";
import {useStore} from "../../../mobx/store";
import c from "./PostsPageList.module.sass"
import {PostsPageListItem} from "./Item/PostsPageListItem";

export const PostsPageList = observer(() => {
    const {postsPageStore} = useStore();
    const postsList = postsPageStore.getPostsList()

    const postsListData = postsList.map(item => {
            return (
                <PostsPageListItem
                    item={item}
                />
            )
        }
    )

    return (
        <>
            {postsListData}
        </>
    )
})