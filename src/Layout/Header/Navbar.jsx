import { NavLink } from 'react-router-dom';
import {BsFillBrightnessHighFill, BsFillMoonFill} from 'react-icons/bs';
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {AiOutlineAlignRight, AiOutlineDown} from 'react-icons/ai';
const Navbar = () => {
    // destructure 
    const {darkMode, setDarkMode} = useContext(AuthContext);
    // declare a state to hold value of mobile navbar 
    const [isOpen, setIsOpen] = useState(false);
    // console.log(darkMode);
    return (
        <div style={{backgroundColor: darkMode==="true" ? '#0c2461':'white', color: darkMode==="true" ? 'white': '#0c2461'}}  
        className="flex justify-between px-10 md:px-20 font-semibold text-xl py-6 shadow-lg">
            <div>
                {/* logo  */}
                <h1 className='text-3xl font-bold'>Tech Cosmos</h1>
            </div>
            {/* style only for mobile devices  */}
            <div className='md:hidden text-2xl' onClick={()=>setIsOpen(!isOpen)}>
                {
                    isOpen==true ? <AiOutlineDown></AiOutlineDown>:
                    <AiOutlineAlignRight></AiOutlineAlignRight>
                }
            </div>
            <div className={`md:flex md:gap-10 absolute md:static ${isOpen ? "rounded-xl mt-16 p-4 z-10 flex flex-col right-6":"-top-80 block"} }`} style={{backgroundColor: darkMode==="true" ? '#0c2461':'white', color: darkMode==="true" ? 'white': '#0c2461'}}>
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