import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import MyCart from "../Pages/MyCart/MyCart";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import BrandPage from "../Pages/Brand/BrandPage";
import ProductDetail from "../Pages/Brand/ProductDetail";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5050/brands')
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
                element: <MyCart></MyCart>,
                loader: ()=>fetch('http://localhost:5050/mycart')
            },
            {
                path: '/brands/:id',
                element: <BrandPage></BrandPage>,
                loader: ({params})=>fetch(`http://localhost:5050/brands/${params.id}`)
            },
            {
                path: '/products/:id1/:id2',
                element: <ProductDetail></ProductDetail>,
                loader: ({params})=>fetch(`http://localhost:5050/products/${params.id1}/${params.id2}`)
            },
            {
                path: '/addproduct',
                element: <AddProducts></AddProducts>
            }
        ]
    }
])
export default MyRoute;