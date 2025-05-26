import { createBrowserRouter } from "react-router-dom"
import { 
    DashboardPage, 
    HomePage, 
    LoginPage, 
    PageLayout, 
    RegisterPage, 
    AuthLayout, 
    RegisterTransaction
} from "./pages"


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/dashboard',
        element: <PageLayout/>,
        children: [ {
                index: true,
                element: <DashboardPage/>
            }, {
                path: 'transaction/new',
                element: <RegisterTransaction/>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [ {
                path: 'login',
                element: <LoginPage/>
            }, {
                path: 'register',
                element: <RegisterPage/>
            }

        ]
    }
])

export default router