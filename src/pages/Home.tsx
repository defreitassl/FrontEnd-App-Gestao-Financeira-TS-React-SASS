import { useNavigate } from "react-router-dom"

const HomePage = () => {

    const navigate = useNavigate()

    return (
        <>
            <h1>Home Page</h1>
            <button onClick={() => {navigate('/auth/login')}}>Login</button>
        </>
    )
}

export default HomePage