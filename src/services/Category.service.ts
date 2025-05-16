import { fetchWrapper } from "./"
import { TransactionCategory } from "../types"


const getAllCategories = async (token: string): Promise<TransactionCategory[] | undefined> => {
    try {
        const response = await fetchWrapper<TransactionCategory[]>({
            endpoint: "/categories",
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
    getAllCategories
}