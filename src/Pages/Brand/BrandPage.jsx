import { useLoaderData } from "react-router-dom";

const BrandPage = () => {
    const brandData = useLoaderData();
    if(typeof brandData !== 'object'){
        return <h1 className="text-2xl py-40 mx-auto text-center min-h-[80vh]">No data found!</h1>
    }
    // console.log(typeof brandData);
    return (
        <div>
            {
                // loop through all data 
            }
        </div>
    );
};

export default BrandPage;