import { useState } from "react"
import { Container, 
        LargeButton, 
        LargeInput, 
        LoginFooter, 
        MainText 
} from "../components"
import { login } from "../services"
import { useNotification } from "../hooks"
import { AuthResponse } from "../types"
import { useNavigate } from "react-router-dom"


const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { showNotification } = useNotification()

    const handleLogin = async (): Promise<void> => {
        const response: AuthResponse | undefined = await login(email, password)

        if (!response) {
            showNotification("Something went wrong", "error")
            return
        }
        if (!response.token) {
            showNotification(response.message, response.error)
            return
        }

        showNotification(response.message, response.error)
        localStorage.setItem('token', response.token)
        setEmail("")
        setPassword("")
        navigate("/dashboard")
    }

    return (
        <Container>
            <MainText text="Login"/>
            <div className="form-inputs">
                <LargeInput 
                    placeholder="Email" 
                    inputType="email"
                    value={email}
                    setValue={setEmail}
                />
                <LargeInput 
                    placeholder="Password" 
                    inputType="password"
                    value={password}
                    setValue={setPassword}
                />
            </div>
            <div className="form-actions">
                <LargeButton 
                    innerText="Sign In" 
                    loginEvent={handleLogin}
                />
                <LoginFooter link="/register" 
                    message="Don't have an account?" 
                    linkWord="Sign Up"
                />
            </div>
        </Container>
    )
}

export default LoginPage