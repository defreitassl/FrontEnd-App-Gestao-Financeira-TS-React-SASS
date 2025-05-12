import { RouterProvider } from "react-router-dom"
import { NotificationProvider } from "./contexts"
import router from "./router"


function App() {
    return (
      <NotificationProvider>
        <RouterProvider router={router}/>
      </NotificationProvider>
    )
}

export default App
