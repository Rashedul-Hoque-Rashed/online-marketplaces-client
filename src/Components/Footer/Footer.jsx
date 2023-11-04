import logo from "../../assets/Images/footer-logo.png"
import { BsFacebook, BsFillPhoneVibrateFill, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className="bg-[#1F4B3F] ">
            <footer className="footer text-white container mx-auto px-6 py-24">
                <nav className="flex flex-col items-center my-auto mx-auto md:mr-10 lg:mr-24">
                    <img src={logo} alt="" className="mb-4" />
                    <div className="flex items-center gap-4">
                        <BsFacebook className="w-8 h-8" />
                        <BsTwitter className="w-8 h-8" />
                        <BsInstagram className="w-8 h-8" />
                        <BsLinkedin className="w-8 h-8" />
                    </div>
                </nav>
                <nav>
                    <header className="text-base font-bold mb-4">NEW YORK</header>
                    <a className="text-gray-400 font-semibold">Huntersville, 957 Hill Hills Suite 491, United States</a>
                    <a className="text-gray-400 font-semibold flex items-center gap-2"> <BsFillPhoneVibrateFill className="w-6 h-6" /> Office: +12(3) 456 7890 1234</a>
                    <a className="text-gray-400 font-semibold flex items-center gap-2"> <MdEmail className="w-6 h-6" /> Support: info@freeio.com</a>
                </nav>
                <nav>
                    <header className="text-base font-bold mb-4">ROME</header>
                    <a className="text-gray-400 font-semibold">Piazza di Spagna, 00187 Roma RM, Italy</a>
                    <a className="text-gray-400 font-semibold flex items-center gap-2"> <BsFillPhoneVibrateFill className="w-6 h-6" /> Office: +12(3) 456 7890 1234</a>
                    <a className="text-gray-400 font-semibold flex items-center gap-2"> <MdEmail className="w-6 h-6" /> Support: info@freeio.com</a>
                </nav>
                <nav>
                    <header className="text-base font-bold mb-4">LONDON</header>
                    <a className="text-gray-400 font-semibold">Fulham Rd London SW6 1HS, United Kingdom</a>
                    <a className="text-gray-400 font-semibold flex items-center gap-2"> <BsFillPhoneVibrateFill className="w-6 h-6" /> Office: +12(3) 456 7890 1234</a>
                    <a className="text-gray-400 font-semibold flex items-center gap-2"> <MdEmail className="w-6 h-6" /> Support: info@freeio.com</a>
                </nav>
            </footer>
            <div className="divider"></div>
            <aside className="text-center text-gray-400 text-xs font-normal">
                <p>Copyright © 2023 - All right reserved by Freeio Ltd</p>
            </aside>
        </div>
    );
};

export default Footer;