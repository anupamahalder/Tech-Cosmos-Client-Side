import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const {darkMode} = useContext(AuthContext);
    return (
        <div>
            <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A'}}  className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 style={{color: darkMode=="true"?"white":"#103798"}}
                 className="text-4xl font-bold">Please Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <form style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A'}}  className="card-body rounded-lg">
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#1D232A'}}className="label-text">Email</span>
                    </label>
                    <input type="email" style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span style={{color: darkMode==="true" ? '#A3AAB7': '#1D232A'}}className="label-text">Password</span>
                    </label>
                    <input style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} 
                     type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <Link href="/" 
                        style={{color: darkMode==="true" ? '#A3AAB7': '#1D232A'}}
                        className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn text-white bg-[#103798] hover:bg-[#2d42e6]">Login</button>
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