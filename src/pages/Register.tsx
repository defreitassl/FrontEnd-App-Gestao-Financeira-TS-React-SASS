import { MainText, LargeInput, LargeButton, LoginFooter } from "../components"


const RegisterPage = () => {

    return (
        <div className="login-card">
            <MainText text="Register"/>
            <div className="login-card-inputs">
                <LargeInput placeholder="Username" inputType="text"/>
                <LargeInput placeholder="Email" inputType="email" />
                <LargeInput placeholder="Password" inputType="password"/>
            </div>
            <div className="login-card-actions">
                <LargeButton innerText="Sign Up"/>
                <LoginFooter link="/login" message="Already have an account?" linkWord="Sign In"/>
            </div>
        </div>
    )
}

export default RegisterPage