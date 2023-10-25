import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CartProduct from "./CartProduct";

const MyCart = () => {
    // load data 
    const myCartData = useLoaderData();
    const {darkMode} = useContext(AuthContext);
    // declare a state to store my cart data
    const [myCart, setMyCart] = useState(myCartData);
    return (
        <div className="max-w-[1300px] " style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#0C2461'}}>
            <h1 className="text-center pt-10 text-3xl font-bold">Total Added Products: {myCart.length}</h1>
            <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-10 mx-auto">
            {
                myCart?.map(cartInfo => <CartProduct key={cartInfo._id} setMyCart={setMyCart} myCart={myCart} cartInfo={cartInfo}></CartProduct>)
            }
            </div>
        </div>
    );
};

export default MyCart;