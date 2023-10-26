import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AboutUs = () => {
    const {darkMode} = useContext(AuthContext);
    return (
        <div className="max-w-[1300px]">
            <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'white', color: darkMode==="true" ? 'white': '#0C2461'}} className="py-10 px-10">
                <h1 className="text-center text-3xl my-10 font-bold">About US</h1>
                <p className="px-6  text-center">
                When you shop at Tech Cosmos, you can do so with complete confidence. We stand behind the quality of every product we sell and the integrity of our service. Your trust in us is of the utmost importance.  Our team of tech experts is available to assist you with product recommendations, technical support, and any questions you may have. We are here to make your tech shopping experience seamless. Thank you for choosing Tech Cosmos as your preferred destination for technology and electronics products. We look forward to serving your tech needs and helping you discover the best the tech world has to offer.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;