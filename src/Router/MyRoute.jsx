import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import MyCart from "../Pages/MyCart/MyCart";
import AddProducts from "../Pages/AddProducts/AddProducts";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5050/user')
            },
            {
                path: '/login',
                element: <h1>Login</h1>
            },
            {
                path: '/mycart',
                element: <MyCart></MyCart>
            },
            {
                path: '/addproducts',
                element: <AddProducts></AddProducts>
            }
        ]
    }
])
export default MyRoute;