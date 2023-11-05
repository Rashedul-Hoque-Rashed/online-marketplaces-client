import img1 from "../../assets/Images/download-app1.png"
import img2 from "../../assets/Images/download-app2.png"
import {AiFillApple} from "react-icons/ai"
import {FaGooglePlay} from "react-icons/fa"

const DownloadApp = () => {
    return (
        <div className="container mx-auto px-2 md:px-6 pb-24 flex flex-col lg:flex-row justify-center gap-32 items-center">
            <div className="flex justify-start">
                <img src={img1} alt="" className="w-96 lg:w-[650px]" />
            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <div>
                    <h4 className="text-2xl lg:text-4xl font-bold mb-8">Download the App</h4>
                    <p className="text-gray-400 mb-16">Take jobs on the go with the freeio app. Stream or download to watch on the plane, the subway, or wherever do your best.</p>
                    <div className="flex gap-4">
                        <button className="text-start px-6 py-2 rounded-xl text-white bg-[#1F4B3F] flex gap-4 items-center">
                            <AiFillApple className="w-10 h-10 pr-3 border-r-2 hidden md:flex" />
                            <p className="text-base font-medium"><span className="text-xs font-normal">Download on the</span> <br /> Apple Store</p>
                        </button>
                        <button className="text-start px-6 py-2 rounded-xl text-white bg-[#1F4B3F] flex gap-4 items-center">
                            <FaGooglePlay className="w-10 h-10 pr-3 border-r-2 hidden md:flex" />
                            <p className="text-base font-medium"><span className="text-xs font-normal">Get in on</span> <br /> Google Play</p>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={img2} alt="" className="hidden md:flex"/>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;