import icon1 from "../../assets/Icons/amazon.png";
import icon2 from "../../assets/Icons/amd.png";
import icon3 from "../../assets/Icons/cisco.png";
import icon4 from "../../assets/Icons/dropcam.png";
import icon5 from "../../assets/Icons/logitech.png";
import icon6 from "../../assets/Icons/spotify.png";

const Trusted = () => {
    return (
        <div className="bg-[#1F4B3F] py-10 rounded-t-2xl mx-4 ">
            <p className="text-sm font-medium text-white text-center mb-8">Trusted by the world’s best</p>
            <div className="container mx-auto px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
                <img src={icon1} alt="" className="" />
                <img src={icon2} alt="" className="" />
                <img src={icon3} alt="" className="" />
                <img src={icon4} alt="" className="" />
                <img src={icon5} alt="" className="" />
                <img src={icon6} alt="" className="" />
            </div>
        </div>
    );
};

export default Trusted;