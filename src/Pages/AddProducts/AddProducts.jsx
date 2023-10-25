import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddProducts = () => {
    const {darkMode} = useContext(AuthContext);
    return (
        <div className="max-w-[1300px] min-h-screen" style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#0C2461'}} >
            {/* form section  */}
            <div className="w-[500px] mx-auto">
            <form  
                style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A'}}  
                className="card-body rounded-lg">
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#1D232A'}}className="label-text">Full Name</span>
                    </label>
                    {/* name input here  */}
                    <input type="text" name="name"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#1D232A'}}className="label-text">Email</span>
                    </label>
                    {/* email input here  */}
                    <input type="email" name="email"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#1D232A'}}className="label-text">Password</span>
                    </label>
                    {/* password input here  */}
                    <input type="password" name="password"
                     style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} 
                     placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn text-white bg-[#103798] hover:bg-[#2d42e6]">Register</button>
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