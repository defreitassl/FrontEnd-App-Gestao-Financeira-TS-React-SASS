import { Outlet } from "react-router-dom"
import { useTheme } from "../hooks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon, faUser } from "@fortawesome/free-solid-svg-icons"

const PageLayout = () => {

    const toggleTheme = useTheme()[1]

    return (
        <>
            <header>
                <nav>
                    <div className="sandwich-menu show-menu"
                    onClick={() => {document.querySelector('.sandwich-menu')!.classList.toggle('show-menu')}}>
                        <span className="span-1"></span>
                        <span className="span-2"></span>
                        <span className="span-3"></span>
                    </div>
                    <div className="right-justified-actions">
                        <button className="profile-button">
                            <FontAwesomeIcon icon={faUser}/>
                        </button>
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
                </nav>
            </header>
            <main>
                {<Outlet/>}
            </main>
        </>
    )
}

export default PageLayout