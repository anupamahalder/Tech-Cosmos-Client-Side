import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Faq = () => {
    const { darkMode } = useContext(AuthContext);
    return ( 
        <div className="max-w-[1300px]">
            <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'white', color: darkMode==="true" ? 'white': '#0C2461'}} className="py-20 px-10 mb-10">
                <h1  className="text-center text-3xl my-4 md:my-10 font-bold">Frequently Asked Question</h1>
                <div className="collapse collapse-plus my-2" style={{backgroundColor:darkMode==="true" ? "#1b1a1a":"#F0EFF5"}} >
                <input type="radio" name="my-accordion-3" defaultChecked="cheked"  /> 
                <div className="collapse-title md:text-xl font-medium">
                    How many brands do we have?
                </div>
                <div className="collapse-content"> 
                    <p>Total 9 brands, these are Google, Samsung, Apple, Sony, Microsoft, LG Electronics, Canon, Dell, Intel</p>
                </div>
                </div>
                <div className="collapse collapse-plus my-2" style={{backgroundColor:darkMode==="true" ? "#1b1a1a":"#F0EFF5"}}>
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title md:text-xl font-medium">
                    Can we get support if there is problem in login?
                </div>
                <div className="collapse-content"> 
                    <p>Yes sure</p>
                </div>
                </div>
                <div className="collapse collapse-plus my-2" style={{backgroundColor:darkMode==="true" ? "#1b1a1a":"#F0EFF5"}}>
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title md:text-xl font-medium">
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

export default Faq;