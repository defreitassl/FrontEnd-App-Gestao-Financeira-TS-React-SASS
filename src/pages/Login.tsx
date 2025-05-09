import { LargeButton, LargeInput, LoginFooter, MainText } from "../components"


const LoginPage = () => {

    return (
        <div className="login-card">
            <MainText text="Login"/>
            <div className="login-card-inputs">
                <LargeInput placeholder="Email" inputType="email" />
                <LargeInput placeholder="Password" inputType="password"/>
            </div>
            <div className="login-card-actions">
                <LargeButton innerText="Sign In"/>
                <LoginFooter message="Don't have an account?" linkWord="Sign Up"/>
            </div>
        </div>
    )
}

export default LoginPage