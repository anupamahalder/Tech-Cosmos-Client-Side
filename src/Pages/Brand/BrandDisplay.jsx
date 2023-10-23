import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
const BrandDisplay = ({brandInfo}) => {
    // destructure 
    const {_id,brand,image,name,price,rating,type,category}=brandInfo;    
    const {darkMode} = useContext(AuthContext);

    return (
        <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A'}} className='rounded-lg mb-10'>
            <div className="card card-compact shadow-xl pt-4 rounded-lg">
            <figure style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5'}}
             className='h-[250px] mx-auto my-auto object-cover object-center'><img className='' src={image} alt={type} /></figure>
            <div className="p-4">
                <h2 className="card-title font-bold text-3xl pl-2">{name}</h2>
                <p className='pl-2 my-2'>{category}</p>
                <p className='pl-2'>Type: <span>{type}</span></p>
                <p className='pl-2'>Price: <span>{price}</span></p>
                {/* ratings  */}
                <div className='flex justify-center gap-5'>
                <Link>
                <button className="btn mx-auto bg-[#123385] hover:bg-[#1f4bbb] text-white py-3 px-3 rounded-2xl my-5 font-bold">Details</button></Link>
                <Link>
                <button className="btn mx-auto bg-[#123385] hover:bg-[#1f4bbb] text-white py-3 px-3 rounded-2xl my-5 font-bold">Update</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};
// Adding proptypes 
BrandDisplay.propTypes = {
    brandInfo: PropTypes.object.isRequired,
}
export default BrandDisplay;