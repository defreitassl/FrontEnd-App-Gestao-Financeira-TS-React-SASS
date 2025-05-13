import { FetchResponse } from "../types"


const URL_BASE = "http://localhost:3333"

interface IFetchOptions {
    endpoint: string
    method: 'POST' | 'PATCH' | 'DELETE'
    data?: Object
}

const fetchWrapper = async (opts: IFetchOptions): Promise<FetchResponse | undefined> => {
    try {
        const url: string = `${URL_BASE}${opts.endpoint}`
        const response = await fetch(url, {
            method: opts.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(opts.data)
        })

        const data: FetchResponse = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export { fetchWrapper }