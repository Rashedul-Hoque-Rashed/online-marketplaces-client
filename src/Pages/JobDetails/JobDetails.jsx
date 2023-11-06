import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const JobDetails = () => {

    const {user} = useContext(AuthContext);
    const job = useLoaderData();


    return (
        <div className="container mx-auto px-2 md:px-6 py-4">
            <Helmet>
                <title>Freeio | Job Details</title>
            </Helmet>
            <div className="my-6">
                <h2 className="text-2xl font-bold mb-6">{job.jobTitle}</h2>
                <p className="text-lg font-medium mb-3">{job.description}</p>
                <div className="flex flex-col md:flex-row justify-start md:gap-6">
                    <p className="text-lg font-medium">Price Range: <span className="text-gray-600">{job.minimumPrice}$-{job.maximumPrice}$</span></p>
                    <p className="text-lg font-medium">Deadline: <span className="text-gray-600">{job.deadline}</span></p>
                </div>
            </div>
            <div className="py-6 px-4 mx-auto max-w-2xl">
                <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">Place your bid</h2>
                <form>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={user?.email} placeholder="" required readOnly />
                        </div>
                        <div className="">
                            <label htmlFor="buyerEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buyer Email</label>
                            <input type="email" name="buyerEmail" id="buyerEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={job?.employerEmail} placeholder="" required readOnly />
                        </div>
                        <div className="w-full">
                            <label htmlFor="deadline" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deadline</label>
                            <input type="date" name="deadline" id="deadline" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                        </div>
                        
                        <div>
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Bidding Price" required />
                        </div>
                    </div>
                    <button type="submit" className={user?.email === job.employerEmail ? "btn normal-case w-full bg-[#1F4B3F] text-white hover:bg-[#0c3b2f] mt-8 btn-disabled" : "btn normal-case w-full bg-[#1F4B3F] text-white hover:bg-[#0c3b2f] mt-8"}>
                        Bid The Project
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobDetails;