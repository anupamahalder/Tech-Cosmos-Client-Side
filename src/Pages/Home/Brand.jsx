import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Brand = ({brand}) => {
    // destructure 
    const {brand_name, image_url, short_description} = brand;
    const {darkMode, setDarkMode} = useContext(AuthContext);

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
            <figure className='w-[350px] h-[250px] rounded-xl bg-white mx-auto my-auto object-cover object-center p-4'><img src={image_url} alt={brand_name} /></figure>
            <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'white', color: darkMode==="true" ? 'white': '#1D232A'}}   className="card-body p-4 h-[200px]">
                <h2 className="card-title">{brand_name}</h2>
                <p>{short_description}</p>
                <div className="card-actions">
                <button className="btn btn-primary">Visit Our Brand</button>
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