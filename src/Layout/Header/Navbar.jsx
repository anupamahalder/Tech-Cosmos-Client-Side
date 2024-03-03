import { NavLink } from 'react-router-dom';
import {BsFillBrightnessHighFill, BsFillMoonFill} from 'react-icons/bs';
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {AiOutlineAlignRight, AiOutlineDown} from 'react-icons/ai';
const Navbar = () => {
    // destructure 
    const {darkMode, setDarkMode, user,logOutUser } = useContext(AuthContext);
    // declare a state to hold value of mobile navbar 
    const [isOpen, setIsOpen] = useState(false);
    // //console.log(darkMode);
    // handle sign out 
    const handleSignOut = () =>{
        logOutUser();
    }
    return (
        <div style={{backgroundColor: darkMode==="true" ? '#0c2461':'white', color: darkMode==="true" ? 'white': '#0c2461'}}  
        className="max-w-[1300px] mx-auto flex justify-between px-10 md:px-4 lg:pl-12 lg:pr-4 font-semibold text-xl py-6 shadow-lg">
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
            <div className={`md:flex md:gap-4 lg:gap-10 absolute md:static ${isOpen ? "rounded-xl mt-16 p-4 z-10 flex flex-col right-6":"-top-80 block"} }`} style={{backgroundColor: darkMode==="true" ? '#0c2461':'white', color: darkMode==="true" ? 'white': '#0c2461'}}>
                {/*------------ Navlink------------  */}
                <NavLink to='/'className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : ""}>Home</NavLink>

                <NavLink to='/addproducts'className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : ""}>Add Product</NavLink>
                <NavLink to='/mycart'className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : ""}>My Cart</NavLink>
                <NavLink to='/contact'className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : ""}>Contact</NavLink>
                {
                    darkMode==="false" ?
                    <BsFillMoonFill onClick={()=>setDarkMode("true")} 
                    className='cursor-pointer mt-1'></BsFillMoonFill>
                    :<BsFillBrightnessHighFill onClick={()=>setDarkMode("false")}
                    className='cursor-pointer mt-1'></BsFillBrightnessHighFill>
                }
                {
                    user ? <div className='pt-2 md:pt-0 md:flex justify-center items-center gap-3 -mt-2'>
                    <button className='text-left' onClick={handleSignOut}>Sign Out</button>
                    <h1 style={{color: darkMode=="true" ? '#c7c7c7': '#4a4a4a'}}
                     className='text-sm my-auto'>{user.displayName || user?.email}</h1>
                     <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                    </div>:
                    <NavLink to='/login'className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : ""}>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;