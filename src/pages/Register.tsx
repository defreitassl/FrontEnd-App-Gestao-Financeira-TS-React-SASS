import { useState } from "react"
import { MainText, 
        LargeInput, 
        LargeButton, 
        LoginFooter, 
        Container 
} from "../components"
import { register } from "../services"


const RegisterPage = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async () => {
        setUsername("")
        setEmail("")
        setPassword("")
        const response = await register(username, email, password)
        console.log(response)
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
                <LargeButton innerText="Sign Up" loginEvent={handleRegister}/>
                <LoginFooter link="/login" 
                    message="Already have an account?" 
                    linkWord="Sign In"
                />
            </div>
        </Container>
    )
}

export default RegisterPage