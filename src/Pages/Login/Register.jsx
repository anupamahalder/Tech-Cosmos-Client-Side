import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const {darkMode, createUser} = useContext(AuthContext);
    // declare a state to store error 
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    // handle register 
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(name, email, password);
        // handle password error 
        if(password.length < 6){
            setError("Password length should be atleast 6 characters!");
            return;
        }
        else if(!/.*[A-Z].*/.test(password)){
            setError("Please give atleast one Uppercase letter!")
            return;
        }
        else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)){
            setError("Please give atleast one special character!")
            return;
        }
        // create user 
        createUser(email,password)
        .then(res=>{
            //console.log(res.user);
            Swal.fire(
                'Good Job!',
                'You have successfully registered!',
                'success'
            )
            form.reset();
            navigate(location.state ? location.state : '/');
        })
        .catch(err=>{
            //console.log(err.message);
            const errMsg = err.message;
            Swal.fire(
                'Sorry!',
                {errMsg},
                'error'
            )
        })
    }
    return (
        <div>
            <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A'}} className="hero min-h-[90vh]">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 style={{color: darkMode=="true"?"white":"#103798"}}
                 className="text-4xl font-bold text-center">Please Register</h1>
                 {
                    error ? <p className="text-center mt-2 text-red-500 font font-semibold">{error}</p>:""
                 }
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <form onSubmit={handleRegister} 
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
                <h1 style={{color: darkMode=="true"? "white":"black"}}
                 className="text center text-sm">Already Have Account? <Link to='/login' className="text-red-500 font-semibold underline">Login</Link></h1>
            </div>
            </div>
        </div>
    );
};

export default Register;