export interface ICommentData {
    id: string
    post_id: string
    name: string
    email: string
    body: string
}

export interface ICommentsPageData {
    commentsList: ICommentData[]
    isCommentsListLoading: boolean
}
