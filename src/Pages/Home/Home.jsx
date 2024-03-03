import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SimpleSlider from "../../components/BannerSlick/Slick";
import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import AboutUs from "../../components/AboutUs/AboutUs";
import Contact from "../../components/Contact/Contact";
import Faq from "../../components/FAQ/Faq";

const Home = () => {
    const {darkMode} = useContext(AuthContext);
    const brands = useLoaderData();
    // //console.log(typeof brands);
    // //console.log(brands);
    return (
        <div style={{backgroundColor: darkMode=="true"&&"#1D232A"}} className="max-w-[1300px] mx-auto min-h-screen">
            {/* Banner section  */}
            <div className="w-full mx-auto">
            <SimpleSlider></SimpleSlider>
            </div>
            {/* Brand showcasing section */}
            <h1 style={{color: darkMode==="true" ? 'white': '#0c2461'}}  className="md:mb-10 text-3xl mt-10 md:mt-24 font-bold text-center mx-auto">Brand Collaboration</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 py-4 w-full">
                {
                    brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                }
            </div>
            {/* About us section  */}
            <AboutUs></AboutUs>
            {/* faq section  */}
            <Faq></Faq>
            {/* contact us section  */}
            <Contact></Contact>
        </div>
    );
};

export default Home;