import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
            <aside>
                <p className="pl-6">
                    <h1 className="font-semibold pb-2 text-center">&copy; Tech Cosmos</h1>
                    <h1>Collaborating All Renouned Brands</h1>
                </p>
            </aside> 
            <nav>
                <header className="footer-title">Links</header> 
                <div className="grid grid-flow-col gap-4">
                <ul className="block font-semibold space-y-2">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/addproducts'>Add Products</Link></li>
                    <li><Link to='/mycart'>My Cart</Link></li>
                </ul>
                </div>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;