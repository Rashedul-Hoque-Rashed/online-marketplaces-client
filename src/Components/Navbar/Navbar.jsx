import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/logo-green-dark.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const Navigate = useNavigate();

    const handelLogOut = () => {
        logOut()
            .then(res => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'Log out successful',
                    showConfirmButton: false,
                    timer: 2500
                })
                Navigate('/');
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 2500
                })
            })
    }

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
        <div className="navbar bg-base-100 container mx-auto px-2 md:px-6 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        {
                                    user && <div className="items-center flex">
                                        <img className="w-6 h-6 mr-2 rounded-full" src={user.photoURL} alt="" />
                                        <p className="text-xs font-semibold">{user.displayName}</p>

                                    </div>
                                }
                        </li>
                        {
                            links
                        }
                    </ul>
                </div>
                <NavLink to="/"><img className="w-28 h-8 md:w-36 md:h-10" src={logo} alt="" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal items-center gap-6 px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-2 items-center">
                    <div className="mr-2">
                        {
                            user && <div className="items-center hidden md:flex">
                                <p className="font-bold md:mr-1 mr-2">{user.displayName}</p>
                                <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                            </div>
                        }
                    </div>
                    {
                        user ? <button onClick={handelLogOut} className="btn bg-[#1F4B3F] text-white normal-case md:text-base md:font-semibold md:px-6 hover:bg-[#0c3b2f]">Log Out</button> : 
                        <NavLink to="/login" className="btn bg-[#1F4B3F] text-white normal-case md:text-base md:font-semibold md:px-6 hover:bg-[#0c3b2f]">Login</NavLink>
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;