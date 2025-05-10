import { Outlet } from "react-router-dom"
import { useTheme } from "../hooks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

const PageLayout = () => {

    const toggleTheme = useTheme()[1]

    return (
        <>
            <header>
                <div className="toggle-theme-container">
                    <button className="toggle-theme-button"
                        onClick={() => toggleTheme()}
                        >
                        <FontAwesomeIcon 
                        icon={
                            localStorage.getItem("theme") === "dark" 
                            ? faSun : faMoon
                        } 
                        />
                    </button>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default PageLayout