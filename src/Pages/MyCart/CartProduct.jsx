import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CartProduct = ({cartInfo}) => {
    // destructure 
    const {brand,image,name,price,rating,type,category}=cartInfo;    
    const {darkMode} = useContext(AuthContext);

    return (
        <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#0C2461'}} 
        className='rounded-lg mb-10'>
            <div className="card card-compact shadow-xl pt-4 rounded-lg">
            <figure style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5'}}
             className='h-[250px] mx-auto my-auto object-cover object-center'><img className='' src={image} alt={type} /></figure>
            <div className="p-4 h-[300px]">
                <div className='h-[200px]'>
                    <h2 className="card-title font-bold text-2xl pl-2">{name}</h2>
                    <p className='pl-2 my-2'>{category}</p>
                    <p className='pl-2'>Brand: <span className='font-semibold'>{brand}</span></p>
                    <p className='pl-2'>Type: <span className='font-semibold'>{type}</span></p>
                    <p className='pl-2'>Price: <span className='font-semibold'>${price}</span></p>
                    {/* ratings  */}
                    <Rating style={{ maxWidth: 120}} className='pl-2' value={rating} readOnly></Rating>
                    {/* <Rating value={rating} /> */}
                    <div className='flex mx-auto absolute bottom-1 px-20 gap-5'>
                    <button className="btn bg-[#851236] hover:bg-[#610a3a] text-white py-3 px-4 rounded-lg my-5 font-bold">Delete</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};
// Adding proptypes 
CartProduct.propTypes = {
    cartInfo: PropTypes.object.isRequired,
}
export default CartProduct;