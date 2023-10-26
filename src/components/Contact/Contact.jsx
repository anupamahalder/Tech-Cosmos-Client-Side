import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Contact = () => {
    const {darkMode} = useContext(AuthContext);
    return (
        <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'white', color: darkMode==="true" ? 'white': '#0C2461'}} className="max-w-[1300px]">
            <h1 className="text-center text-3xl my-10 font-bold">Contact US</h1>
            <div className="md:flex md:gap md:px-10 mx-auto">
                <div className="mx-auto flex justify-center">
                    {/* map  */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.27101830672!2d88.18218985626342!3d22.535660235919348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1698305336405!5m2!1sen!2sin" width="500" height="350" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="">
                    <form action="" 
                    className="space-y-2">
                        <div>
                            <input type="text" name="username" placeholder="User Name" />
                        </div>
                        <input type="email" name="email" id="" placeholder="User Email" />
                        <input type="submit" style={{color: darkMode==="true" ? '#0C2461':'white', backgroundColor: darkMode==="true" ? 'white': '#0C2461'}}
                        value="SEND" className="font-semibold cursor-pointer py-2 px-3 rounded-lg"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;