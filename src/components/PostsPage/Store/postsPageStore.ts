import {runInAction, makeAutoObservable} from 'mobx';
import {IPostsPageStore} from "../Types/postsPageTypes";
import {postsPageApi} from "../Api/postsApi";
import {commentsPageApi} from "../PostsPageList/Item/Comments/Api/commentsApi";

export class PostsPageStore {
    public postsPageData: IPostsPageStore = {
        postsList: [],
        isPostsListLoading: false,
    }

    constructor() {
        makeAutoObservable(this);
    }

    setIsPostsLoading(isLoading: boolean) {
        this.postsPageData.isPostsListLoading = isLoading
    }

    setIsCommentsForPostsLoading(post_id: string, isLoading: boolean) {
        const index = this.postsPageData.postsList.findIndex(item => {
            return item.id === post_id
        });
        this.postsPageData.postsList[index].isCommentsListLoading = isLoading
    }

    async loadPostsListAsyncAction(user_id: string, page_number: string) {
        this.setIsPostsLoading(true);
        const response = await postsPageApi.getPostsListByPage(user_id, page_number);
        if (response) {
            const responseToSet = response.map(item => {
                    return {
                        ...item,
                        commentsList: [],
                        isCommentsListLoading: false
                    }
                }
            )
            runInAction(() => {
                this.postsPageData.postsList = responseToSet
            });
        }
        this.setIsPostsLoading(false);
    }

    async loadCommentsForPostListAsyncAction(post_id: string) {
        this.setIsCommentsForPostsLoading(post_id, true);
        const response = await commentsPageApi.getCommentsListByPage(post_id);
        if (response) {
            const index = this.postsPageData.postsList.findIndex(item => {
                return item.id === post_id
            });

            runInAction(() => {
                this.postsPageData.postsList[index].commentsList = response
            });
        }
        this.setIsCommentsForPostsLoading(post_id, false);
    }

    getIsPostsLoading() {
        return this.postsPageData.isPostsListLoading
    }

    getPostsList() {
        return this.postsPageData.postsList
    }

    getIsCommentsForPostLoading(post_id: string) {
        const index = this.postsPageData.postsList.findIndex(item => {
            return item.id === post_id
        });
        return this.postsPageData.postsList[index].isCommentsListLoading
    }
    getCommentsListForPost(post_id: string) {
        const index = this.postsPageData.postsList.findIndex(item => {
            return item.id === post_id
        });
        return this.postsPageData.postsList[index].commentsList
    }
}

export default new PostsPageStore();