import { UserSummary } from "../types"
import { fetchWrapper } from "./"


const getUserSumary = async (token: string): Promise<UserSummary | undefined> => {
    try {
        const response = await fetchWrapper<UserSummary>({
            endpoint: "/users/summary",
            token: token
        })

        if (!response) throw new Error("No response from server")
        if (!response.data) throw new Error ("Error while parsing response")

        return response.data
    } catch (error) {
        console.error(error)
    }
}

export {
    getUserSumary
}