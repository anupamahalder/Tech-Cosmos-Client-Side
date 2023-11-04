import { useContext, useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const MyCart = () => {
    const {user} = useContext(AuthContext);
    // declare a state to store my cart data
    const [myCart, setMyCart] = useState([]);

    // pass email to url and load data based on user
    const url = `https://tech-cosmos-server-side.vercel.app/mycart?email=${user?.email}`;
    // const url = `http://localhost:5033/mycart?email=${user?.email}`;
    // load data 
    useEffect(()=>{

        axios.get(url,{withCredentials: true})
        .then(res =>{
            setMyCart(res.data);
        })

        // fetch(url)
        // .then(res => res.json())
        // .then(data =>setMyCart(data))
    },[url])
    
    return (
        <div className="max-w-[1300px] mx-auto min-h-screen mt-10">
            <h1 className="text-center py-6 text-3xl font-bold">Total Added Products: {myCart.length}</h1>
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