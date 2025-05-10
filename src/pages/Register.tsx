import { MainText, LargeInput, LargeButton, LoginFooter, Container } from "../components"

const RegisterPage = () => {

    return (
        <Container>
            <MainText text="Register"/>
            <div className="form-inputs">
                <LargeInput placeholder="Username" inputType="text"/>
                <LargeInput placeholder="Email" inputType="email" />
                <LargeInput placeholder="Password" inputType="password"/>
            </div>
            <div className="form-actions">
                <LargeButton innerText="Sign Up"/>
                <LoginFooter link="/login" message="Already have an account?" linkWord="Sign In"/>
            </div>
        </Container>
    )
}

export default RegisterPage