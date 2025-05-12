const API_BASE = "http://localhost:3333"

const register = async (
    name: string, 
    email: string, 
    password: string
) => {
    try {
        const response = await fetch(`${API_BASE}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const login = async (email: string, password: string) => {
    try {
        const response = await fetch(`${API_BASE}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export {
    register,
    login
}