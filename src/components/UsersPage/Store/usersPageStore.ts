import {runInAction, makeAutoObservable} from 'mobx';
import {IUsersPageStore} from "../Types/usersPageTypes";
import {usersPageApi} from "../Api/usersApi";

export class UsersPageStore {
    public usersPageData: IUsersPageStore = {
        usersList: [],
        isUsersListLoading: false,
    }

    constructor() {
        makeAutoObservable(this);
    }

    setIsUsersLoading(isLoading: boolean) {
        this.usersPageData.isUsersListLoading = isLoading
    }

    async loadUsersListAsyncAction(page_number: string) {
        this.setIsUsersLoading(true);
        const response = await usersPageApi.getUsersListByPage(page_number);
        if (response) {
            runInAction(() => {
                this.usersPageData.usersList = response
            });
        }
        this.setIsUsersLoading(false);
    }

    getIsUsersLoading() {
        return this.usersPageData.isUsersListLoading
    }

    getUsersList() {
        return this.usersPageData.usersList
    }
}

export default new UsersPageStore();