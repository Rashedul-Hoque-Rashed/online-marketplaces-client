import { Helmet } from "react-helmet";
import { Comment } from "react-loader-spinner";
import useAxios from "../../Hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";


const BidRequests = () => {

    const { user } = useContext(AuthContext);
    const axios = useAxios();

    const getBidsRequest = async () => {
        const res = await axios.get(`/bids-request?email=${user.email}`)
        return res;
    }

    const { data: bidsRequest, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['bidsRequest'],
        queryFn: getBidsRequest
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

    const handelAccept = (id) => {
        axios.put(`/bids-request/${id}`, { status: "in progress" })
            .then(res => {
                console.log(res)
                refetch()
            })
            .catch(err => console.error(err))
    }

    const handelReject = (id) => {
        axios.put(`/bids-request/${id}`, { status: "cancel" })
            .then(res => {
                console.log(res)
                refetch()
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="container mx-auto px-2 md:px-6 py-10 min-h-[700px]">
            <Helmet>
                <title>Freeio | Bid Requests</title>
            </Helmet>
                {
                    bidsRequest.data?.length > 0 &&
                    <h4 className="text-2xl font-bold mb-6">You have received some bid requests</h4>
                }
            <div>
                {
                    bidsRequest.data?.length === 0 ? <p className="text-4xl font-bold text-center my-24 md:my-32 lg:my-52">You have not any bid request.</p> :
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Job title</th>
                                        <th>Email</th>
                                        <th>Deadline</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bidsRequest.data?.map((bidRequest, index) => <tr key={bidRequest._id}>
                                            <th>{index + 1}</th>
                                            <td>{bidRequest.jobTitle}</td>
                                            <td>{bidRequest.sellerEmail}</td>
                                            <td>{bidRequest.deadline}</td>
                                            <td>{bidRequest.price}</td>
                                            <td>{bidRequest.status}</td>
                                            <td>
                                                <button onClick={() => handelAccept(bidRequest._id)} className={bidRequest.status === "pending" ? "btn normal-case bg-[#1F4B3F] text-white hover:bg-[#0c3b2f] ml-4" : "hidden"}>Accept</button>
                                                <button onClick={() => handelReject(bidRequest._id)} className={bidRequest.status === "pending" ? "btn normal-case bg-red-600 text-white hover:bg-red-700 ml-4" : "hidden"}>Reject</button>
                                                {
                                                    (bidRequest.status === "in progress" || bidRequest.status === "complete") && <ProgressBar
                                                        percent={(bidRequest.status === "in progress" ? 50 : 100)}
                                                        filledBackground="linear-gradient(to right, #43927e, #1F4B3F)"
                                                    />
                                                }
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </div>
    );
};

export default BidRequests;