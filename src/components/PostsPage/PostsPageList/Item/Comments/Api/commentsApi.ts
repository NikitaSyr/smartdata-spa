import axiosInstance from "../../../../../../api/axiosConfig";
import {ICommentData} from "../Types/commentsPageTypes";

const commentsBaseUrl = "posts";

export const commentsPageApi = {
    async getCommentsListByPage(post_id: string): Promise<ICommentData[]> {
        try {
            const response = await axiosInstance.get(

                    commentsBaseUrl + "/" + post_id + "/comments"
            )
            return response.data
        } catch (e: any) {
            return e
        }
    }
}