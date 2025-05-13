interface AuthResponse {
    message: string
    token?: string
    user?: Object
    error?: string
}

export default AuthResponse