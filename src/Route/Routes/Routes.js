import Main from "../../Layout/Main";
import Banner from "../../pages/Home/Banner/Banner";
import Home from "../../pages/Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/banner',
                element: <Banner></Banner>
            }
        ]
    }
])

export default router; 