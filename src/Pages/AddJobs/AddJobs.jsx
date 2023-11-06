import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddJobs = () => {

    const { user } = useContext(AuthContext);
    const axios = useAxios();
    const Navigate = useNavigate();

    const handelAddJobs = e => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const minimumPrice = form.minimumPrice.value;
        const maximumPrice = form.maximumPrice.value;
        const description = form.description.value;

        const newJobs = { buyerEmail: email, jobTitle: title, deadline, category, minimumPrice, maximumPrice, description };

        axios.post('/jobs', newJobs)
            .then(res => {
                console.log(res.data);
                if(res.data?.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Jobs added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      Navigate('/posted-jobs')
                }
            })
            .catch(err => {
                console.error(err)
            })

    }

    return (
        <div className="container mx-auto px-2 md:px-6 py-4 min-h-[700px]">
            <Helmet>
                <title>Freeio | Add Jobs</title>
            </Helmet>
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">Add a new job</h2>
                <form onSubmit={handelAddJobs}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={user?.email} placeholder="Type Your Email" required readOnly />
                        </div>
                        <div className="w-full">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
                            <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Job Title" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="deadline" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deadline</label>
                            <input type="date" name="deadline" id="deadline" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                                <option>Select category</option>
                                <option value="web-development">Web Development</option>
                                <option value="digital-marketing">Digital Marketing</option>
                                <option value="graphics-design">Graphics Design</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="minimum price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum Price</label>
                            <input type="text" name="minimumPrice" id="minimumPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Minimum Price" required />
                        </div>
                        <div>
                            <label htmlFor="maximum price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Maximum Price</label>
                            <input type="text" name="maximumPrice" id="maximumPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Maximum Price" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea id="description" name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn normal-case w-full bg-[#1F4B3F] text-white hover:bg-[#0c3b2f] mt-8">
                        Add Jobs
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddJobs;