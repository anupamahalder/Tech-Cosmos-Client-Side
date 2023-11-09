import { Rating } from "@smastrom/react-rating";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Swal from "sweetalert2";

const ProductDetail = () => {
    const product = useLoaderData();
    // destructure 
    const {_id,brand,image,name,price,rating,type,category, description}=product;    
    const {darkMode, user} = useContext(AuthContext);
    const navigate = useNavigate();

    // handle add to cart 
    const handleAddToCart = () =>{
        fetch('http://localhost:5033/mycart')
        .then(res => res.json())
        .then(data => {
            const checkItem = data.find(item =>item._id === _id);
            if(checkItem){
                Swal.fire(
                    'Product exists in My Cart',
                    'This product has already been added to my cart',
                    'info'
                )
            }
            else{
            const email = user?.email;
            const productData = {email,...product};
            // send data to server  
            fetch('http://localhost:5033/mycart',{
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(productData)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire(
                        'Good Job',
                        'This product has been added to my cart',
                        'success'
                    )
                }
            })
            .catch(err =>{
                console.log(err.message);
                Swal.fire(
                    'Sorry',
                    'Failed to added in my cart',
                    'error'
                )
            })
        }
        });
    }

    return (
        <div className='px-10 pt-6 relative min-h-screen max-w-[1300px] mx-auto'>
            {/* go back icon  */}
            <BiArrowBack onClick={()=>navigate(-1)} className="text-gray-400 cursor-pointer font-bold absolute left-10 text-4xl"></BiArrowBack>
            <div className="py-4 rounded-lg my-16" 
            style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5',color: darkMode==="true" ? 'white': '#0C2461'}} >
            <div className="md:flex md:gap-10 py-10">
            <figure style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5'}}
            className='w-1/2 mx-auto my-auto object-cover md:mx-2 md:flex-1 object-center'><img className='rounded-xl' src={image} alt={type} /></figure>
            <div className="p-4 md:flex-1">
                <div className=''>
                    <h2 className="card-title font-bold text-2xl pl-2">{name}</h2>
                    <p className='pl-2 my-2'>{category}</p>
                    <p className='pl-2'>Brand: <span className='font-semibold'>{brand}</span></p>
                    <p className='pl-2'>Type: <span className='font-semibold'>{type}</span></p>
                    <p className='pl-2'>Price: <span className='font-semibold'>${price}</span></p>
                    {/* ratings  */}
                    <Rating style={{ maxWidth: 120}} className='pl-2' value={rating} readOnly></Rating>
                    <h1 className='pl-2 py-2'><span className="font-bold">Description:</span> {description}</h1>
                    <div className='flex mx-auto px-20 gap-5'>
                    {/* Add to cart  */}
                    <button 
                    onClick={handleAddToCart}
                     className="btn bg-[#2a5ad3] hover:bg-[#1d387d] text-white py-3 px-4 rounded-lg my-5 font-bold"><AiOutlineShoppingCart className="text-2xl font-bold"></AiOutlineShoppingCart>Add To Cart</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ProductDetail;