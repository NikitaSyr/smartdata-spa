import usersPageStore, {UsersPageStore} from "../components/UsersPage/Store/usersPageStore";

export type RootStore = {
    usersPageStore: UsersPageStore;
    // commentStore: CommentStore;
}

const rootStore: RootStore = {
    usersPageStore,
    // commentStore,
};

export default rootStore;