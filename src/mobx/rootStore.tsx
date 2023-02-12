import usersPageStore, {UsersPageStore} from "../components/UsersPage/Store/usersPageStore";
import postsPageStore, {PostsPageStore} from "../components/PostsPage/Store/postsPageStore";

export type RootStore = {
    usersPageStore: UsersPageStore;
    postsPageStore: PostsPageStore;
}

const rootStore: RootStore = {
    usersPageStore,
    postsPageStore,
};

export default rootStore;