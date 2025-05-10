import { Container, LargeButton, LargeInput, LoginFooter, MainText } from "../components"


const LoginPage = () => {

    return (
        <Container>
            <MainText text="Login"/>
            <div className="form-inputs">
                <LargeInput placeholder="Email" inputType="email" />
                <LargeInput placeholder="Password" inputType="password"/>
            </div>
            <div className="form-actions">
                <LargeButton innerText="Sign In"/>
                <LoginFooter link="/register" message="Don't have an account?" linkWord="Sign Up"/>
            </div>
        </Container>
    )
}

export default LoginPage