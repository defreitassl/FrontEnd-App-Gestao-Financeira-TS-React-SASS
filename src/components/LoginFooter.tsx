import { Link } from "react-router-dom"

interface ILoginFooter {
    message: "Don't have an account?" | "Already have an account?"
    linkWord: "Sign Up" | "Sign In"
    link: "/login" | "/register"
}

const LoginFooter = ({ message, linkWord, link }: ILoginFooter) => {

    return (
        <div className="auth-card-footer-text">
            <p>{message} <Link to={link}><span>{linkWord}</span></Link></p>
        </div>
    )
}

export default LoginFooter