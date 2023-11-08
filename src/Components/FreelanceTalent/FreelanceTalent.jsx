import img from "../../assets/Images/freelance.jpg"
import icon1 from "../../assets/Icons/proof.jpg"
import icon2 from "../../assets/Icons/cost.jpg"
import icon3 from "../../assets/Icons/safe.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const FreelanceTalent = () => {
    return (
        <div className="container mx-auto px-2 md:px-6 pb-24 flex flex-col md:flex-row justify-center gap-6 lg:gap-32 items-center">
            <div data-aos="zoom-in-down" data-aos-duration="3000" className="flex-1 flex justify-center">
                <img src={img} alt="" className="h-80 lg:h-96 " />
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="3000" className="flex-1">
                <h2 className="text-2xl lg:text-4xl font-bold mb-8">A whole world of freelance <br /> talent at your fingertips</h2>
                <div className="flex items-center gap-3 mb-6">
                    <img src={icon1} alt="" />
                    <div>
                        <h4 className="text-xl font-bold text-[#1F4B3F] mb-2">Proof of quality</h4>
                        <p className="text-gray-400 md:w-96">Check any pro’s work samples, client reviews, and identity verification.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 mb-6">
                    <img src={icon2} alt="" />
                    <div>
                        <h4 className="text-xl font-bold text-[#1F4B3F] mb-2">No cost until you hire</h4>
                        <p className="text-gray-400 md:w-96">Explore and connect with service providers without any upfront fees.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 mb-6">
                    <img src={icon3} alt="" />
                    <div>
                        <h4 className="text-xl font-bold text-[#1F4B3F] mb-2">Safe and secure</h4>
                        <p className="text-gray-400 md:w-96">Your safety is our top priority- with confidence, knowing your data is protected at all times.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreelanceTalent;