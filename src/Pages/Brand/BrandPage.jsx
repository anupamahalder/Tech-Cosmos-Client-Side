import { useLoaderData, useNavigate } from "react-router-dom";
import BrandDisplay from "./BrandDisplay";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {BiArrowBack} from 'react-icons/bi';
import BrandSlider from "../../components/BrandSlick/BrandSlider";
const BrandPage = () => {
    const brandData = useLoaderData();
    console.log('brand data', brandData);
    const {darkMode} = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log('brand name',brandData[0]?.brand);
    const brandName = brandData[0]?.key_name;
    if(typeof brandData != 'object'){
        return <h1 className="text-center text-3xl font-semibold my-40 min-h-[90vh]">No Products Found!</h1>
    }

    // load advertisement data 
    const [adsData, setAdsData] = useState([]);
    useEffect(()=>{
        fetch(`https://tech-cosmos-server-side.vercel.app/brands/advertisement/${brandName}`)
        .then(res=>res.json())
        .then(data=>{
            setAdsData(data);
            console.log('data set', data);
        })
        .catch(error =>{
            console.log(error);
        })
    },[brandName]);


    // console.log(typeof brandData);
    return (
        <div className="max-w-[1300px] min-h-screen" style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#0C2461'}}>
            {/* brand slider  */}
            <BrandSlider adsData={adsData}></BrandSlider>
            {/* go back icon  */}
            <BiArrowBack onClick={()=>navigate(-1)} className="text-gray-400 cursor-pointer font-bold absolute left-10 text-4xl mt-10"></BiArrowBack>
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