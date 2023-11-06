import { Helmet } from "react-helmet";
import useAxios from "../../Hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Comment } from "react-loader-spinner";
import { Link } from "react-router-dom";


const PostedJobs = () => {
    const { user } = useContext(AuthContext);
    const axios = useAxios();

    const getJobs = async () => {
        const res = await axios.get(`/jobs?email=${user.email}`)
        return res;
    }

    const { data: jobs, isLoading, isError, error } = useQuery({
        queryKey: ['jobs'],
        queryFn: getJobs
    })

    if (isLoading) {
        return (
            <div className="w-20 my-72 mx-auto">
                <Comment
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="comment-loading"
                    wrapperStyle={{}}
                    wrapperClass="comment-wrapper"
                    color="#fff"
                    backgroundColor="#1F4B3F"
                />
            </div>
        )
    }

    if (isError) {
        return <div>something went wrong: {error}</div>
    }

    return (
        <div className="container mx-auto px-2 md:px-6 py-10 md:py-16 lg:py-24">
            <Helmet>
                <title>Freeio | My Posted Jobs</title>
            </Helmet>
            <div className="">
                {
                    jobs?.data?.length === 0 ? <p className="text-4xl font-bold text-center my-24 md:my-32 lg:my-52">Sorry, You have not posted any jobs. </p> :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {
                                jobs?.data?.map(job => <div key={job._id} className="bg-[#1F4B3F] text-white p-1 rounded-xl">
                                    <h2 className="text-center text-2xl font-semibold my-4">{job.jobTitle}</h2>
                                    <div className="bg-white text-black rounded-xl pt-8 pb-2 text-center">
                                        <h4 className="text-xl font-semibold mb-8">{job.description}</h4>
                                        <p className="text-lg font-semibold mb-4">Price Range: <span className="text-gray-600">{job.minimumPrice}$-{job.maximumPrice}$</span></p>
                                        <div className="flex items-center gap-2 px-2">
                                            <Link to={`/updateJobs/${job._id}`} className="flex-1 btn normal-case w-full bg-[#1F4B3F] text-white hover:bg-[#0c3b2f]">
                                                Update
                                            </Link>
                                            <button className="flex-1 btn normal-case w-full bg-red-600 text-white hover:bg-red-700">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                }
                {

                }
            </div>
        </div>
    );
};

export default PostedJobs;