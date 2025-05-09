interface ILoginFooter {
    message: "Don't have an account?" | "Already have an account?"
    linkWord: "Sign Up" | "Sign In"
}

const LoginFooter = ({ message, linkWord }: ILoginFooter) => {

    return (
        <div className="login-footer-text">
            <p>{message} <a href=""><span>{linkWord}</span></a></p>
        </div>
    )
}

export default LoginFooter