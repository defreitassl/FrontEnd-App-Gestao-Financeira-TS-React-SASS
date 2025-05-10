import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, PageLayout, RegisterPage } from "./pages";


const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout/>,
        children: [ {
                index: true,
                element: <HomePage/>
            }, {
                path: '/login',
                element: <LoginPage/>
            }, {
                path: '/register',
                element: <RegisterPage/>
            }
        ]
    }
])

export default router