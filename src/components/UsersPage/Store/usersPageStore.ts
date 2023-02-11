import {observable, action, makeObservable, runInAction} from 'mobx';
import {IUserData, IUsersPageAPIListRequest, IUsersPageStore} from "../Types/usersPageTypes";
import {usersPageApi} from "../Api/usersApi";

export class UsersPageStore {
    public usersPageData: IUsersPageStore = {
        usersList: [],
        isUsersListLoading: false,
        foo: "bla bla"
    }

    constructor() {
        makeObservable(this, {
            usersPageData: observable,
            // isUsersListLoading: observable,
            loadUsersListAsyncAction: action,
            // setUsersListAction: action,
            getUsersList: action,
            // setIsUsersPageLoading: action,
            // getIsUsersPageLoading: action,
        });
    }

    async loadUsersListAsyncAction(page_number: string) {
        this.usersPageData.isUsersListLoading = true;
        console.log(this.usersPageData.isUsersListLoading)
        const response = await usersPageApi.getUsersListByPage(page_number);
        if (response) {
            runInAction(() => {
                this.usersPageData.usersList = response
            });
            // return this.usersPageData.usersList = response
        }
        this.usersPageData.isUsersListLoading = false;
        // const usersList = this.getUsersList()
        // console.log(usersList)
    }

    getUsersList() {
        return this.usersPageData.usersList
    }
}

export default new UsersPageStore();