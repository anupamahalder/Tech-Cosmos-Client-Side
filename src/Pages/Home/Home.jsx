import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SimpleSlider from "../../components/BannerSlick/Slick";
import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";

const Home = () => {
    const {darkMode} = useContext(AuthContext);
    const brands = useLoaderData();
    return (
        <div style={{backgroundColor: darkMode=="true"&&"#1D232A"}} className="">
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
            <div style={{backgroundColor: darkMode==="true" ? '#F0EFF5':'white', color: darkMode==="true" ? 'white': '#0C2461'}} className="py-10 px-10">
                <h1 className="text-center text-3xl my-10 font-bold">Frequently Asked Question</h1>
                <div className="collapse collapse-plus my-2" style={{backgroundColor: darkMode==="true" ? '#F2F2F2':'#F0EFF5'}}>
                <input type="radio" name="my-accordion-3" checked="checked"  /> 
                <div className="collapse-title text-xl font-medium">
                    How many brands do we have?
                </div>
                <div className="collapse-content"> 
                    <p>Total 9 brands</p>
                </div>
                </div>
                <div className="collapse collapse-plus my-2" style={{backgroundColor: darkMode==="true" ? '#F2F2F2':'#F0EFF5'}}>
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    Can we get support if there is problem in login?
                </div>
                <div className="collapse-content"> 
                    <p>Yes sure</p>
                </div>
                </div>
                <div className="collapse collapse-plus my-2" style={{backgroundColor: darkMode==="true" ? '#F2F2F2':'#F0EFF5'}}>
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    Can I add products to my cart?
                </div>
                <div className="collapse-content"> 
                    <p>Yes before that you have to be logged in user.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;