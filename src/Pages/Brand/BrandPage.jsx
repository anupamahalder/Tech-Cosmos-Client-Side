import { Link, useLoaderData } from "react-router-dom";
import BrandDisplay from "./BrandDisplay";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {BiArrowBack} from 'react-icons/bi';
const BrandPage = () => {
    const brandData = useLoaderData();
    const {darkMode} = useContext(AuthContext);

    if(typeof brandData !== 'object'){
        return <h1 className="text-2xl py-40 font-semibold mx-auto text-center min-h-[80vh]">No data found!</h1>
    }
    // console.log(typeof brandData);
    return (
        <div className="max-w-[1300px] " style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#0C2461'}}>
            {/* go back icon  */}
            <Link to='/'>
            <BiArrowBack className="text-gray-400 font-bold absolute left-10 top-24 text-4xl"></BiArrowBack>
            </Link>
            {/* heading  */}
            <h1 className="text-center pt-10 text-3xl font-bold">All Products From {brandData[0].brand}</h1>
            <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-10 mx-auto">
            {
                // loop through all data 
                brandData?.map(brandInfo => <BrandDisplay key={brandInfo._id} brandInfo={brandInfo}></BrandDisplay>)
            }
        </div>
        </div>
    );
};

export default BrandPage;