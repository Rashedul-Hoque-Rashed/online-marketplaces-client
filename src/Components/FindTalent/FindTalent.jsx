import img from "../../assets/Images/Find-talent.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsArrowUpRight } from "react-icons/bs";

AOS.init();


const FindTalent = () => {
    return (
        <div className="container mx-auto px-2 md:px-6 pb-24 flex flex-col-reverse md:flex-row justify-center gap-6 lg:gap-32 items-center">
            <div data-aos="zoom-in-up" data-aos-duration="3000" className="">
                <p className="text-[#1F4B3F] text-base font-bold">For clients</p>
                <h4 className="text-2xl lg:text-4xl font-bold my-6">Find talent your way</h4>
                <p className="text-gray-400 lg:w-[450px]">Work with the largest network of independent professionals and get things done—from quick turnarounds.</p>
                <button className="btn bg-[#1F4B3F] text-white normal-case md:text-base md:font-semibold md:px-6 hover:bg-[#0c3b2f] mt-6 flex items-center gap-2">
                    Contact Us
                    <BsArrowUpRight className="w-4 h-4"/>
                </button>
            </div>
            <div data-aos="zoom-in-down" data-aos-duration="3000" className="flex justify-center">
                <img src={img} alt="" className="" />
            </div>

        </div>
    );
};

export default FindTalent;