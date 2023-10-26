import { Outlet } from 'react-router-dom';
import Navbar from './Header/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer className='absolute bottom-0'></Footer>
        </div>
    );
};

export default MainLayout;