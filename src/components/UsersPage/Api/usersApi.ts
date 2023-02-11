import axiosInstance from "../../../api/axiosConfig";
import {IUserData} from "../Types/usersPageTypes";

const usersBaseUrl = "users";
const usersPerPage = "20";

export const usersPageApi = {
    async getUsersListByPage(page_number: string): Promise<IUserData[]> {
        try {
            const response = await axiosInstance.get(
                    usersBaseUrl + "?page=" + page_number + "&per_page=" + usersPerPage
            )
            return response.data
        } catch (e: any) {
            return e
        }
    }
}