import { useContext, useRef } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


const Contact = () => {
    const {darkMode} = useContext(AuthContext);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nd8x9bd', 'template_55gqpur', form.current, '9MT5PWD0Vk57sX2mm')
          .then((result) => {
            Swal.fire(
                'Thank You!',
                'Messaged send successfully!',
                'success'
            )
              //console.log(result.text);
              e.target.reset();
          }, (error) => {
              //console.log(error.text);
          });
      };
    
    return (
        <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'white', color: darkMode==="true" ? 'white': '#0C2461'}} className="max-w-[1300px] mx-auto pb-20">
            <h1 className="text-center text-3xl py-10 font-bold">Contact US</h1>
            <div className="md:flex md:gap-10 px-2 md:px-10 mx-auto md:justify-center md:items-center">
                <div className="mx-auto mb-10 md:m-0 md:flex-1 flex justify-center shadow-2xl rounded-lg h-[250px] md:h-[420px]">
                    {/* map  */}
                <iframe className="w-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.27101830672!2d88.18218985626342!3d22.535660235919348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1698305336405!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {/* form section  */}
                <div className="card w-full md:flex-1 mx-auto shadow-2xl">
                <form  onSubmit={sendEmail}
                ref={form}
                style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A'}}  
                className="card-body rounded-lg">
                    <h1 style={{color: darkMode==="true" ? 'white': '#0C2461'}}
                    className="text-center text-2xl font-bold mb-2">Get In Touch</h1>
                    {/* user name input here  */}
                    <div className="form-control">
                    <input type="text" name="username"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} placeholder="User Name" className="input input-bordered" required />
                    </div>
                    {/* email input here  */}
                    <div className="form-control">
                    <input type="email" name="useremail"
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A',border :darkMode==="true"?"1px solid white" :""}} placeholder="User Email" className="input input-bordered" required />
                    </div>
                    {/* message content  */}
                    <div className="">
                    <textarea
                    style={{backgroundColor: darkMode==="true" ? '#1D232A':'#F0EFF5', color: darkMode==="true" ? 'white': '#1D232A', border :darkMode==="true"?"1px solid white" :""}} 
                    placeholder="Message" className="input w-full input-bordered h-32" required />
                    </div>
                    <div className="form-control mt-2">
                    <button type="submit" className="btn w-1/2 mx-auto text-white bg-[#103798] hover:bg-[#2d42e6]">SEND</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;