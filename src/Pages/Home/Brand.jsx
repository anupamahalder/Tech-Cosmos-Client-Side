import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Brand = ({brand}) => {
    // destructure 
    const {brand_name, image_url, short_description} = brand;
    const {darkMode} = useContext(AuthContext);

    return (
        <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A'}} className='rounded-lg mb-10'>
            <div className="card card-compact shadow-xl pt-4 rounded-lg">
            <figure className='w-[350px] h-[250px] rounded-xl bg-white mx-auto my-auto object-cover object-center p-4'><img src={image_url} alt={brand_name} /></figure>
            <div className=" p-4 h-[200px]">
                <h2 className="card-title text-red-500  font-bold text-2xl pl-2">{brand_name}</h2>
                <p className='pl-2 mt-2 h-[100px]'>{short_description}</p>
                <div className='flex justify-center'>
                <button className="btn mx-auto bg-[#123385] hover:bg-[#1f4bbb] text-white py-3 px-3 rounded-2xl my-5 font-bold">Visit Our Brand</button>
                </div>
            </div>
            </div>
        </div>
    );
};
// Adding proptypes 
Brand.propTypes = {
    brand: PropTypes.object.isRequired,
}
export default Brand;