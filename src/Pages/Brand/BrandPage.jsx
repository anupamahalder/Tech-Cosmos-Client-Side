import { useLoaderData } from "react-router-dom";
import BrandDisplay from "./BrandDisplay";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BrandPage = () => {
    const brandData = useLoaderData();
    const {darkMode} = useContext(AuthContext);

    if(typeof brandData !== 'object'){
        return <h1 className="text-2xl py-40 font-semibold mx-auto text-center min-h-[80vh]">No data found!</h1>
    }
    // console.log(typeof brandData);
    return (
        <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A'}}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-10 mx-auto">
            {
                // loop through all data 
                brandData?.map(brandInfo => <BrandDisplay key={brandInfo._id} brandInfo={brandInfo}></BrandDisplay>)
            }
        </div>
    );
};

export default BrandPage;