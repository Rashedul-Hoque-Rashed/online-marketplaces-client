import { NavLink, useNavigate } from "react-router-dom";
import loginImg from "../../assets/Images/login.avif"
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const Navigate = useNavigate();

    const handelCreateUser = e => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const photo = from.photo.value;

        if (!/^(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/.test(password)
        ) {
            Swal.fire({
                icon: 'error',
                title: "Password must be 6 characters, one uppercase and one spacial characters",
                showConfirmButton: false,
                timer: 2500
            });
            return;
        }

        createUser(email, password, name, photo)
            .then(res => {
                updateProfile(auth.currentUser, {
                    displayName: `${name}`, photoURL: `${photo}`
                })
                console.log(res.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Registration successful',
                    showConfirmButton: false,
                    timer: 2500
                })
                Navigate('/')
                
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

    return (
        <div className="hero container mx-auto px-2 md:px-6 py-10 md:py-24">
            <Helmet>
                <title>Freeio | Register</title>
            </Helmet>
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center flex-1 lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card w-full md:w-5/12 shadow-2xl bg-base-100 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
                    <form onSubmit={handelCreateUser} className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Your Email" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900">Photo URL</label>
                            <input type="text" name="photo" id="photo" placeholder="Your Photo URL" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                        </div>
                        <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-[#1F4B3F] hover:underline" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                        <button type="submit" className="btn normal-case w-full bg-[#1F4B3F] text-white hover:bg-[#0c3b2f]">Register</button>
                        <p className="text-sm font-light text-gray-500">
                            Already have an account? <NavLink to="/login" href="#" className="font-medium text-[#1F4B3F] hover:underline">Login</NavLink>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;