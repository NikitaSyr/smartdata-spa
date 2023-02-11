export interface IUserData {
    id: string
    name: string
    email: string
    gender: string
    status: string
}

export interface IUsersPageAPIListRequest {
    page_number: string
}

// export interface IUsersPageAPIListResponse {
//     data: IUserData[]
// }

export interface IUsersPageStore {
    usersList: IUserData[]
    isUsersListLoading: boolean
    foo: string
}
