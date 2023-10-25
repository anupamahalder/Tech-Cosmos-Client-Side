import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import MyCart from "../Pages/MyCart/MyCart";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import BrandPage from "../Pages/Brand/BrandPage";
import ProductDetail from "../Pages/Brand/ProductDetail";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import PrivateRoute from "./PrivateRoute";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5033/brands')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: ()=>fetch('http://localhost:5033/mycart')
            },
            {
                path: '/brands/:id',
                element: <BrandPage></BrandPage>,
                loader: ({params})=>fetch(`http://localhost:5033/brands/${params.id}`)
            },
            {
                path: '/products/:id1/:id2',
                element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5033/products/${params.id1}/${params.id2}`)
            },
            {
                path: '/update/:id1/:id2',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5033/products/${params.id1}/${params.id2}`)
            },
            {
                path: '/addproducts',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            }
        ]
    }
])
export default MyRoute;