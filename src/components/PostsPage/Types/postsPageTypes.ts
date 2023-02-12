import {ICommentData, ICommentsPageData} from "../PostsPageList/Item/Comments/Types/commentsPageTypes";

export interface IPostData extends ICommentsPageData{
    id: string
    user_id: string
    title: string
    body: string
}

export interface IPostsPageAPIListRequest {
    page_number: string
}

// export interface IPostsPageAPIListResponse {
//     data: IPostData[]
// }

export interface IPostsPageStore {
    postsList: IPostData[]
    isPostsListLoading: boolean
}
