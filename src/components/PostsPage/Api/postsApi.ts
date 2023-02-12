import axiosInstance from "../../../api/axiosConfig";
import {IPostData} from "../Types/postsPageTypes";

const postsBaseUrl = "users";
const postsPerPage = "10";

export const postsPageApi = {
    async getPostsListByPage(user_id: string, page_number: string): Promise<IPostData[]> {
        try {
            const response = await axiosInstance.get(

                    postsBaseUrl + "/" + user_id + "/posts?page=" + page_number + "&per_page=" + postsPerPage
            )
            return response.data
        } catch (e: any) {
            return e
        }
    }
}