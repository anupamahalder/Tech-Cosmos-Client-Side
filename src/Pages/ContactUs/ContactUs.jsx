import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Contact from "../../components/Contact/Contact";

const ContactUs = () => {
    const {darkMode} = useContext(AuthContext);
    return (
        <div style={{backgroundColor: darkMode==="true" ? '#1D232A':'white', color: darkMode==="true" ? 'white': '#0C2461'}} className="max-w-[1300px] min-h-screen mx-auto my-20">
            <Contact></Contact>
        </div>
    );
};

export default ContactUs;