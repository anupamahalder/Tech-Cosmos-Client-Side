import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddProducts = () => {
    const {darkMode} = useContext(AuthContext);
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
        const key_name = brand;
        const category = 'Technology and electronics';
        const product = {name, brand, image, type, price, rating, key_name, category, description};

        // send data to server  
        fetch(`http://localhost:5033/brands/${brand}`,{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Good Job',
                    'This product has been added',
                    'success'
                )
                form.reset();
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
        <div className="m-10 md:max-w-[1300px] mx-auto min-h-screen pb-20" style={{backgroundColor: darkMode==="true" ? '#1D232A':'white', color: darkMode==="true" ? 'white': '#0C2461'}} >
            {/* form section  */}
            <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5'}} 
            className="w-[350px] md:w-[500px] mx-auto mt-12 rounded-lg shadow-lg">
                <h1 className="text-center pt-6 text-2xl md:text-3xl font-semibold uppercase">Add Products</h1>
            <form  onSubmit={handleAddProduct}
                style={{color: darkMode==="true" ? 'white': '#1D232A'}}  
                className="card-body rounded-lg">
                    {/* product name input here  */}
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#0C2461'}}className="label-text font-semibold">PRODUCT NAME</span>
                    </label>
                    <input type="text" name="name"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} placeholder="name" className="input input-bordered" required />
                    </div>
                    {/* option for brand name  */}
                    <div className="form-control">
                    <label className="label">
                    <span style={{color: darkMode==="true" ? '#A3AAB7': '#0C2461'}}className="label-text font-semibold">SELECT BRAND NAME</span></label>
                    <select id="" name="brand" style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} className="input input-bordered" placeholder="select brand name" required>
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
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} placeholder="image url" className="input input-bordered" required />
                    </div>
                    {/* type of products input here  */}
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#0C2461'}}className="label-text font-semibold">TYPE OF PRODUCTS</span>
                    </label>
                    <input type="text" name="type"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} placeholder="name" className="input input-bordered" required />
                    </div>
                    {/* price  */}
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#0C2461'}}className="label-text font-semibold">PRICE</span>
                    </label>
                    <input type="number" name="price" min="0" step="any"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} placeholder="price" className="input input-bordered" required />
                    </div>
                    {/* short description input here  */}
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#0C2461'}}className="label-text font-semibold">SHORT DESCRIPTION ABOUT PRODUCT</span>
                    </label>
                    <input type="text" name="description"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} placeholder="description" className="input input-bordered" required />
                    </div>
                    {/* Ratings  */}
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#0C2461'}}className="label-text font-semibold">RATINGS</span>
                    </label>
                    <input type="number" name="rating" min="0" step="any"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} placeholder="ratings" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                    <button 
                    type="submit" className="btn text-white bg-[#103798] hover:bg-[#2d42e6]">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Image
// Name
// Brand Name
// Type (If you choose the Technology and Electronics category ,then the types of products will be phone, computer, headphone, etc)
// Price
// Short description
// Rating
// Add button

export default AddProducts;