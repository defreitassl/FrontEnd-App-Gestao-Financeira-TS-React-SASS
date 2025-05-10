import { createBrowserRouter } from "react-router-dom";
import { DashboardPage, HomePage, LoginPage, PageLayout, RegisterPage } from "./pages";


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
            }, {
                path: '/dashboard',
                element: <DashboardPage/>
            }
        ]
    }
])

export default router