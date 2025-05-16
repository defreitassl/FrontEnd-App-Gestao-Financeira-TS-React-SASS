import { fetchWrapper } from "./"
import { AuthResponse } from "../types"


const register = async (
    name: string, 
    email: string, 
    password: string
): Promise<AuthResponse | undefined> => {
    try {
        const data: AuthResponse | undefined = await fetchWrapper<AuthResponse>({
            method: "POST",
            endpoint: "/auth/register",
            data: { name, email, password }
        })

        return data
    } catch (error) {
        console.error(error)
    }
}

const login = async (email: string, password: string): Promise<AuthResponse | undefined> => {
    try {
        const data: AuthResponse | undefined = await fetchWrapper<AuthResponse>({
            method: "POST",
            endpoint: "/auth/login",
            data: { email, password }
        })

        return data
    } catch (error) {
        console.error(error)
    }
}

export {
    register,
    login
}