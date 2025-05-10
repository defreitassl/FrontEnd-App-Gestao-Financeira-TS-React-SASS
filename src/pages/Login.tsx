import { LargeButton, LargeInput, LoginFooter, MainText } from "../components"


const LoginPage = () => {

    return (
        <div className="container-card">
            <MainText text="Login"/>
            <div className="form-inputs">
                <LargeInput placeholder="Email" inputType="email" />
                <LargeInput placeholder="Password" inputType="password"/>
            </div>
            <div className="form-actions">
                <LargeButton innerText="Sign In"/>
                <LoginFooter link="/register" message="Don't have an account?" linkWord="Sign Up"/>
            </div>
        </div>
    )
}

export default LoginPage