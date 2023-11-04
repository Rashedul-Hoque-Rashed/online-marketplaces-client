import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo-green-dark.png"

const Navbar = () => {
    // Add job,My posted jobs,My Bids,Bid Requests,
    const links = <>
        <li><NavLink to='/' className={({ isActive }) =>
    isActive ? "text-base font-bold text-[#1F4B3F] underline" : "text-base font-semibold"
  }>
            Home
        </NavLink></li>
        <li><NavLink to='/add-jobs' className={({ isActive }) => isActive ? "text-base font-bold text-[#1F4B3F] underline" : "text-base font-semibold"
  }>
            Add job
        </NavLink></li>
        <li><NavLink to='/posted-jobs' className={({ isActive }) => isActive ? "text-base font-bold text-[#1F4B3F] underline" : "text-base font-semibold"
  }>
            My posted jobs
        </NavLink></li>
        <li><NavLink to='/bids' className={({ isActive }) => isActive ? "text-base font-bold text-[#1F4B3F] underline" : "text-base font-semibold"
  }>
            My Bids
        </NavLink></li>
        <li><NavLink to='/bid-requests' className={({ isActive }) => isActive ? "text-base font-bold text-[#1F4B3F] underline" : "text-base font-semibold"
  }>
            Bid Requests
        </NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 container mx-auto px-6 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <NavLink to="/"><img className="w-36 h-10" src={logo} alt="" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal items-center gap-6 px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink className="btn bg-[#1F4B3F] text-white normal-case px-6 hover:bg-[#0c3b2f]">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;