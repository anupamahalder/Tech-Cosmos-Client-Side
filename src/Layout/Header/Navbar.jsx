import { NavLink } from 'react-router-dom';
import {BsFillBrightnessHighFill, BsFillMoonFill} from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Navbar = () => {
    // destructure 
    const {darkMode, setDarkMode} = useContext(AuthContext);
    // console.log(darkMode);
    return (
        <div style={{backgroundColor: darkMode==="true" ? '#0c2461':'white', color: darkMode==="true" ? 'white': '#0c2461'}}  
        className="flex justify-between px-20 font-semibold text-xl py-6 shadow-lg">
            <div>
                {/* logo  */}
                <h1 className='text-3xl font-bold'>Tech Cosmos</h1>
            </div>
            <div className='flex gap-10'>
                
                {/*------------ Navlink------------  */}
                <NavLink to='/'className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : ""}>Home</NavLink>

                <NavLink to='/addproducts'className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : ""}>Add Product</NavLink>
                <NavLink to='/mycart'className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : ""}>My Cart</NavLink>
                {
                    darkMode==="false" ?
                    <BsFillMoonFill onClick={()=>setDarkMode("true")} 
                    className='cursor-pointer mt-1'></BsFillMoonFill>
                    :<BsFillBrightnessHighFill onClick={()=>setDarkMode("false")}
                    className='cursor-pointer mt-1'></BsFillBrightnessHighFill>
                }
                <NavLink to='/login'className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : ""}>Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;