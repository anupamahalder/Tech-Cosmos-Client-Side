import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const {darkMode} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div>
            <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A'}} className="hero min-h-[90vh]">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 style={{color: darkMode=="true"?"white":"#103798"}}
                 className="text-4xl font-bold">Please Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <form onSubmit={handleLogin} 
                style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A'}}  
                className="card-body rounded-lg">
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
                    <label className="label">
                        <Link href="/" 
                        style={{color: darkMode==="true" ? '#A3AAB7': '#1D232A'}}
                        className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn text-white bg-[#103798] hover:bg-[#2d42e6]">Login</button>
                    <button className="btn mt-3 text-white bg-[#6e1b1b] hover:bg-[#a42f27]">Login with Google</button>
                    </div>
                </form>
                </div>
                <h1 style={{color: darkMode=="true"? "white":"black"}}
                 className="text center text-sm">Donot Have Account? <Link to='/register' className="text-red-500 font-semibold underline">Register</Link></h1>
            </div>
            </div>
        </div>
    );
};

export default Login;