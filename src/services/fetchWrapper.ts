import { FetchResponse } from "../types"


const URL_BASE = "http://localhost:3333"

interface IFetchOptions {
    endpoint: string
    method?: 'POST' | 'PATCH' | 'DELETE'
    data?: Object
    token?: string
}

const fetchWrapper = async <T>(opts: IFetchOptions): Promise<FetchResponse<T> | undefined> => {
    try {
        const url: string = `${URL_BASE}${opts.endpoint}`
        const response = await fetch(url, {
            method: opts.method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${opts.token}`
            },
            body: JSON.stringify(opts.data)
        })

        if (response.status === 401) {
            localStorage.removeItem("token")
            window.location.href = "/login"
            return Promise.reject("Expired Session")
        }
        
        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message || "Error while fetching data")
        }

        const data: FetchResponse<T> = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export { fetchWrapper }