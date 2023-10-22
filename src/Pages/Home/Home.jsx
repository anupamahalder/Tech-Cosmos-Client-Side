import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SimpleSlider from "../../components/BannerSlick/Slick";

const Home = () => {
    const {darkMode} = useContext(AuthContext);
    return (
        <div style={{backgroundColor: darkMode=="true"&&"#1D232A"}} className="">
            {/* Banner section  */}
            <div className="w-full mx-auto">
            <SimpleSlider></SimpleSlider>
            </div>
            <div>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
            </div>
        </div>
    );
};

export default Home;