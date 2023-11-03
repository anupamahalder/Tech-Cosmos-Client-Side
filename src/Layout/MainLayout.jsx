import { Outlet } from 'react-router-dom';
import Navbar from './Header/Navbar';
import Footer from '../components/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MainLayout = () => {
    const {darkMode} = useContext(AuthContext);
    return (
        <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'white', color: darkMode==="true" ? 'white': '#0C2461'}}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer className='absolute bottom-0'></Footer>
        </div>
    );
};

export default MainLayout;