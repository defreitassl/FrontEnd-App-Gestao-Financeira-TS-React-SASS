import { LoginPage } from "./pages"
import { useTheme } from "./hooks"


function App() {

  const toggleTheme = useTheme()[1]

  return (
    <main>
      <LoginPage/>
      <button
      onClick={() => toggleTheme()}>aaa</button>
    </main>
  )
}

export default App
