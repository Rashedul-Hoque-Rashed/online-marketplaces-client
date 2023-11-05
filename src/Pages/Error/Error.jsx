import { NavLink } from "react-router-dom";
import error from "../../assets/Images/error.jpg"
import {BsArrowUpRight} from "react-icons/bs"

const Error = () => {
    return (
        <div className="container mx-auto px-2 md:px-6 py-6 md:py-36 flex flex-col md:flex-row justify-center gap-6 md:gap-32 items-center">
            <div className="flex-1 flex justify-center">
                <img src={error} alt="" />
            </div>
            <div className="flex-1">
                <h1 className="text-9xl font-extrabold mb-10">40<span className="text-[#1F4B3F]">4</span></h1>
                <h4 className="text-3xl font-bold mb-4">Oops! It looks like you are lost.</h4>
                <p className="text-sm text-gray-400 mb-4">The page you are looking for is not available. Try to search again or use the go to.</p>
                <NavLink to="/" className="w-52 text-white border border-[#1F4B3F] bg-[#1F4B3F] text-lg font-semibold px-6 py-3 rounded-xl hover:bg-transparent hover:text-[#1F4B3F] flex items-center gap-2">Back to Home <BsArrowUpRight className="w-6 h-6" /></NavLink>
            </div>
        </div>
    );
};

export default Error;