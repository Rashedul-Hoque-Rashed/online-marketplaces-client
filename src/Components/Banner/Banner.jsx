import img from "../../assets/Images/banner.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Banner = () => {
    return (
        <div className="container mx-auto px-2 md:px-6 py-8 md:py-16 lg:py-24 flex flex-col-reverse md:flex-row items-center gap-10">
            <div data-aos="zoom-in-up" data-aos-duration="3000" className="flex-1">
                <h2 className="text-xl lg:text-4xl text-[#1F4B3F] font-bold mb-8">More than 10K expert <br /> freelancers are waiting for you</h2>
                <div className="flex items-center justify-between gap-6">
                    <div>
                        <h4 className="text-lg lg:text-3xl font-bold text-[#1F4B3F] ">835M</h4>
                        <p className="text-[#222222] text-xs font-light lg:text-base lg:font-normal">Total Freelancer</p>
                    </div>
                    <div>
                        <h4 className="text-lg lg:text-3xl font-bold text-[#1F4B3F]">750M</h4>
                        <p className="text-[#222222] text-xs font-light lg:text-base lg:font-normal">Positive Review</p>
                    </div>
                    <div>
                        <h4 className="text-lg lg:text-3xl font-bold text-[#1F4B3F]">90M</h4>
                        <p className="text-[#222222] text-xs font-light lg:text-base lg:font-normal">Order received</p>
                    </div>
                    <div>
                        <h4 className="text-lg lg:text-3xl font-bold text-[#1F4B3F]">238M</h4>
                        <p className="text-[#222222] text-xs font-light lg:text-base lg:font-normal">Projects Completed</p>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-down" data-aos-duration="3000" className="flex-1">
                <img src={img} alt="" className=""/>
            </div>
        </div>
    );
};

export default Banner;