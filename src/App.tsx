// import { RouterProvider } from "react-router-dom"
// import router from "./router"
import { useTheme } from "./hooks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { MainText, Container, LargeButton, SubText, DashboardStats } from "./components"

function App() {

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
            <Container>
                <MainText text="Dashboard" alignLeft={true}/>
                <DashboardStats/>
                <LargeButton innerText="New Transaction"/>
                <SubText text="Recent Transactions"/>
            </Container>
        </main>
      </>
    )
    // return (
    //   <RouterProvider router={router}/>
    // )
}

export default App
