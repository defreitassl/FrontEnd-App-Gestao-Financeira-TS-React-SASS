import { useState } from "react"
import { MainText, 
        LargeInput, 
        LargeButton, 
        LoginFooter, 
        Container 
} from "../components"
import { register } from "../services"
import { useNavigate } from "react-router-dom"
import { AuthResponse } from "../types"
import { useNotification } from "../hooks"


const RegisterPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { showNotification } = useNotification()

    const handleRegister = async () => {
        
        const response: AuthResponse | undefined 
        = await register(username, email, password)

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
        setUsername("")
        setEmail("")
        setPassword("")
        navigate("/dashboard", { replace: true })
    }

    return (
        <Container>
            <MainText text="Register"/>
            <div className="form-inputs">
                <LargeInput 
                    placeholder="Username" 
                    inputType="text"
                    value={username}
                    setValue={setUsername}
                />
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
                <LargeButton innerText="Sign Up" event={handleRegister}/>
                <LoginFooter link="/auth/login" 
                    message="Already have an account?" 
                    linkWord="Sign In"
                />
            </div>
        </Container>
    )
}

export default RegisterPage