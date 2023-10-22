import { NavLink } from 'react-router-dom';
import {BsFillBrightnessHighFill, BsFillMoonFill} from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Navbar = () => {
    // destructure 
    const {darkMode, setDarkMode} = useContext(AuthContext);
    // console.log(darkMode);
    return (
        <div style={{backgroundColor: darkMode ? 'white': '#0c2461', color: !darkMode ? 'white': '#0c2461'}}  
        className="flex justify-between px-20 font-semibold text-xl py-6 shadow-lg">
            <div>
                {/* logo  */}
                <h1 className='text-3xl font-bold'>Tech Cosmos</h1>
            </div>
            <div className='flex gap-10'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/addproducts'>Add Product</NavLink>
                <NavLink to='/mycart'>My Cart</NavLink>
                {
                    darkMode ?
                    <BsFillMoonFill onClick={()=>setDarkMode(!darkMode)} 
                    className='cursor-pointer mt-1'></BsFillMoonFill>
                    :<BsFillBrightnessHighFill onClick={()=>setDarkMode(!darkMode)}
                    className='cursor-pointer mt-1'></BsFillBrightnessHighFill>
                }
                <NavLink to='/login'>Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;