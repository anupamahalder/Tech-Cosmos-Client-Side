import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const CartProduct = ({cartInfo, setMyCart, myCart}) => {
    // destructure 
    const {_id, brand,image,name,price,rating,type,category}=cartInfo;    
    const {darkMode} = useContext(AuthContext);
    // handle delete button 
    const handleDeleteBtn = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                console.log('Deleted id: ',id);
                fetch(`http://localhost:5033/mycart/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'The Product has successully deleted',
                            'success'
                        )
                        const remaining = myCart.filter(item => item._id != id);
                        setMyCart(remaining);
                    }
                    else {
                        Swal.fire(
                            'Sorry!',
                            'Failed to delete product from mycart.',
                            'error'
                        )
                    }
                })
            }
          })
    }

    return (
        <div data-aos="flip-left"
         style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#0C2461'}} 
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
                    <div className='flex mx-auto absolute bottom-1 left-1/2 right-1/2 justify-center'>
                    <button onClick={() =>handleDeleteBtn(_id)}
                    className="btn bg-[#851236] hover:bg-[#610a3a] text-white py-3 px-4 rounded-lg my-5 font-bold">Delete</button>
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
    setMyCart: PropTypes.func.isRequired,
    myCart: PropTypes.array,
}
export default CartProduct;