import { useState } from "react"
import { Container, 
        LargeButton, 
        LargeInput, 
        LoginFooter, 
        MainText 
} from "../components"
import { login } from "../services"
import { useNotification } from "../hooks"


const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { showNotification } = useNotification()

    const handleLogin = async () => {
        setEmail("")
        setPassword("")
        const response = await login(email, password)
        showNotification(response.message, response.error)
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