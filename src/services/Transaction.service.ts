import { fetchWrapper } from "./"
import { IRegisterTransaction, ServiceResponse } from "../types"


const registerOneTransaction = async (
    token: string, 
    transactionData: IRegisterTransaction
): Promise<ServiceResponse<IRegisterTransaction> | undefined> => {
    try {
        const response = await fetchWrapper<IRegisterTransaction>({
            endpoint: "/transactions/new",
            token: token,
            method: "POST",
            data: transactionData
        })

        if (!response) throw new Error("No response from server")
        if (!response.data) throw new Error("Error while parsing response")

        return response
    } catch (error) {
        console.error(error)
    }
}

export {
    registerOneTransaction
}