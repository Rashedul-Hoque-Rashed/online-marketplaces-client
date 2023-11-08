import { Helmet } from "react-helmet";
import useAxios from "../../Hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useMutation, useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loading from "../../../public/loading.json"


const PostedJobs = () => {
    const { user } = useContext(AuthContext);
    const axios = useAxios();

    const getJobs = async () => {
        const res = await axios.get(`/jobs?email=${user.email}`)
        return res;
    }

    const deleteJob = async (id) => {
        const res = await axios.delete(`/jobs/${id}`);
        return res;
    };

    const { data: jobs, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['jobs'],
        queryFn: getJobs
    })

    const { mutate } = useMutation({
        mutationKey: ['deleteJob'],
        mutationFn: deleteJob
    });

    if (isLoading) {
        return (
            <div className="my-40 flex justify-center">
                <Lottie animationData={loading} className="h-96 w-96" />
            </div>
        )
    }

    if (isError) {
        return <div>something went wrong: {error}</div>
    }


    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                mutate(id, {
                    onSuccess: (data) => {
                        if (data.data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    },
                    onError: (error) => {
                        console.error(error);
                    }
                });
            }
        });
    }

    return (
        <div className="container mx-auto px-2 md:px-6 py-10 md:py-16 lg:py-24 min-h-[700px]">
            <Helmet>
                <title>Freeio | My Posted Jobs</title>
            </Helmet>
            <div className="">
                {
                    jobs?.data?.length === 0 ? <p className="text-4xl font-bold text-center my-24 md:my-32 lg:my-52">Sorry, You have not posted any jobs. </p> :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                jobs?.data?.map(job => <div key={job._id} className="bg-[#1F4B3F] text-white p-1 rounded-xl">
                                    <h2 className="text-center text-2xl font-semibold my-4">{job.jobTitle}</h2>
                                    <div className="bg-white text-black rounded-xl pt-8 pb-2 text-center">
                                        <h4 className="text-xl font-semibold mb-8 min-h-[85px]">{job.description}</h4>
                                        <p className="text-lg font-semibold mb-4">Price Range: <span className="text-gray-600">{job.minimumPrice}$-{job.maximumPrice}$</span></p>
                                        <div className="flex items-center gap-2 px-2">
                                            <Link to={`/updateJobs/${job._id}`} className="flex-1 btn normal-case w-full bg-[#1F4B3F] text-white hover:bg-[#0c3b2f]">
                                                Update
                                            </Link>
                                            <button onClick={() => handelDelete(job._id)} className="flex-1 btn normal-case w-full bg-red-600 text-white hover:bg-red-700">
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