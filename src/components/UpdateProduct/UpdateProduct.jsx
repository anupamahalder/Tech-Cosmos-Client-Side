import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const {darkMode} = useContext(AuthContext);
    const product  = useLoaderData();
    const navigate = useNavigate('');
    // destructure 
    let {_id,name, brand, image, type, price, rating, category, description} = product;
    const parsedFloat = parseFloat(rating); // Parse the string as a float
    rating = parseFloat(parsedFloat.toFixed(2)); // Round to two decimal places

    const handleAddProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        category = 'Technology and electronics';
        const updatedProduct = {_id, name, brand, image, type, price, rating, category, description};
        // send data to server  
        fetch(`https://tech-cosmos-server-side-7zgruv72p-anupama-halders-projects.vercel.app/${brand}/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Good Job',
                    'This product has been updated successfully',
                    'success'
                )
                form.reset();
                navigate(-1);
            }
        })
        .catch(err =>{
            console.log(err.message);
            Swal.fire(
                'Sorry',
                'Failed to add product',
                'error'
            )
        })
    }
    return (
        <div className="max-w-[1300px] min-h-screen pb-20" style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#0C2461'}} >
            {/* form section  */}
            <div className="w-[500px] mx-auto">
                <h1 className="text-center pt-6 text-3xl font-semibold">Update The Products</h1>
            <form  onSubmit={handleAddProduct}
                style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A'}}  
                className="card-body rounded-lg">
                    {/* product name input here  */}
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#0C2461'}}className="label-text font-semibold">PRODUCT NAME</span>
                    </label>
                    <input type="text" name="name"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} defaultValue={name} className="input input-bordered" required />
                    </div>
                    {/* option for brand name  */}
                    <div className="form-control">
                    <label className="label">
                    <span style={{color: darkMode==="true" ? '#A3AAB7': '#0C2461'}}className="label-text font-semibold">SELECT BRAND NAME</span></label>
                    <select id="" name="brand" style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} className="input input-bordered" defaultValue={brand} required>
                        <option value="google">Google</option>
                        <option value="canon">Canon</option>
                        <option value="intel">Intel</option>
                        <option value="samsung">Samsung</option>
                        <option value="microsoft">Microsoft</option>
                        <option value="dell">Dell</option>
                        <option value="apple">Apple</option>
                        <option value="sony">Sony</option>
                        <option value="lgelectronics">LG Electronics</option>
                    </select>
                    </div>
                    {/* image url input here  */}
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#0C2461'}}className="label-text font-semibold">IMAGE URL</span>
                    </label>
                    <input type="text" name="image"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} defaultValue={image} className="input input-bordered" required />
                    </div>
                    {/* type of products input here  */}
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#0C2461'}}className="label-text font-semibold">TYPE OF PRODUCTS</span>
                    </label>
                    <input type="text" name="type"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} defaultValue={type} className="input input-bordered" required />
                    </div>
                    {/* price  */}
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#0C2461'}}className="label-text font-semibold">PRICE</span>
                    </label>
                    <input type="number" name="price" min="0" step="any"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} defaultValue={price} className="input input-bordered" required />
                    </div>
                    {/* short description input here  */}
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#0C2461'}}className="label-text font-semibold">SHORT DESCRIPTION ABOUT PRODUCT</span>
                    </label>
                    <input type="text" name="description"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} defaultValue={description} className="input input-bordered" required />
                    </div>
                    {/* Ratings  */}
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#0C2461'}}className="label-text font-semibold">RATINGS</span>
                    </label>
                    <input type="number" name="rating" min="0" step="any"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} defaultValue={rating} className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                    <button 
                    type="submit" className="btn text-white bg-[#103798] hover:bg-[#2d42e6]">Update Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;