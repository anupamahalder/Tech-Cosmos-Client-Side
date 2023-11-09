import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import axios from "axios";

const Login = () => {
    // destructure from context api 
    const {darkMode, signInUser,
        signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef(null);
    // declare a state to store error while login 
    const [error, setError] = useState('');
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // handle password error 
        if(password.length < 6){
            setError("Password length should atleast 6 characters long!");
            return;
        }
        // call signInUser with email and password
        signInUser(email, password)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            // const userEmail = {email};
            // console.log(userEmail);
            // // send user data and to set cookies on browser use withCredentials
            // axios.post('http://localhost:5033/jwt',userEmail, {
            // // set cookies to browser    
            // withCredentials: true
            // })
            // .then(res=>{
            //     console.log(res.data);
            //     if(res.data.success){
            //         Swal.fire(
            //             'Good job!',
            //             'You have successfully logged in!',
            //             'success'
            //         )
            //         form.reset();
            //         // naviagate user 
            //         navigate(location?.state ? location.state : '/'); 
            //     }
            // })
            if(loggedInUser){
                Swal.fire(
                    'Good job!',
                    'You have successfully logged in!',
                    'success'
                )
                form.reset();
                // naviagate user 
                navigate(location?.state ? location.state : '/'); 
            }
        })
        .catch(err =>{
            setError("Please give correct email and password to login!");
            console.log(err.message);
        })
    }
    // handle google sign in 
    const handleGoogleSignIn = ()=>{
        console.log('hello');
        signInWithGoogle()
        .then(result =>{
            // const userEmail = result.user?.email;
            // console.log(userEmail);
            // // send user data and to set cookies on browser use withCredentials
            // axios.post('http://localhost:5033/jwt',{email: userEmail}, {
            //     withCredentials: true
            // })
            // .then(res=>{
            //     console.log(res.data);
            //     if(res.data.success){
            //         Swal.fire(
            //             'Good job!',
            //             'You have successfully logged in!',
            //             'success'
            //         )
            //         // naviagate user 
            //         navigate(location?.state ? location.state : '/'); 
            //     }
            // })
            if(result.user){
                Swal.fire(
                    'Good job!',
                    'You have successfully logged in!',
                    'success'
                )
                // naviagate user 
                navigate(location?.state ? location.state : '/'); 
            }
        })
        .catch(err=>{
            setError(err.message);
        })
    }
    // handle forget/ reset password 
    const handleForgetPassword = ()=>{
        const email = emailRef.current.value;
        if(!email){
            setError("Please provide an email");
            return;
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            setError("Please provide a valid email");
            return;
        }
        // send verification email 
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            Swal.fire(
                'Email has already Send!',
                'Please verify the email',
                'success'
            )
        })
        .catch(err =>{
            setError(err.message);
        })
    }
     return (
        <div>
            <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A'}} className="hero min-h-[90vh]">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 style={{color: darkMode=="true"?"white":"#103798"}}
                 className="text-4xl font-bold text-center">Please Login</h1>
                 {
                    error ? <p className="text-center mt-2 text-red-500 font font-semibold">{error}</p>:""
                 }
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
                    <input type="email" name="email" ref={emailRef} 
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
                        <Link onClick={handleForgetPassword} 
                        style={{color: darkMode==="true" ? '#A3AAB7': '#1D232A'}}
                        className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn text-white bg-[#103798] hover:bg-[#2d42e6]">Login</button>
                    <button onClick={handleGoogleSignIn}
                     className="btn mt-3 text-white bg-[#6e1b1b] hover:bg-[#a42f27]">Login with Google</button>
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