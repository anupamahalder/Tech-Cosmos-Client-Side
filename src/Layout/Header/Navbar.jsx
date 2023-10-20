import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex gap-10 text-blue-800 font-semibold text-xl shadow-lg'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Navbar;