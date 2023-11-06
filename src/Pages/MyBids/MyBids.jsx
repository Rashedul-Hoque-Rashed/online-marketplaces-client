import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Comment } from "react-loader-spinner";
import useAxios from "../../Hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";



const MyBids = () => {
    const { user } = useContext(AuthContext);
    const axios = useAxios();

    const getBids = async () => {
        const res = await axios.get(`/bids?email=${user.email}`)
        return res;
    }

    const { data: bids, isLoading, isError, error } = useQuery({
        queryKey: ['bids'],
        queryFn: getBids
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
        <div className="container mx-auto px-2 md:px-6 py-10 min-h-[700px]">
            <Helmet>
                <title>Freeio | My Bids</title>
            </Helmet>
            <div>
                {
                    bids.data?.length === 0 ? <p className="text-4xl font-bold text-center my-24 md:my-32 lg:my-52">You did not bid at any jobs.</p> :
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Job title</th>
                                        <th>Email</th>
                                        <th>Deadline</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bids.data?.map((bid, index) => <tr key={bid._id}>
                                            <th>{index + 1}</th>
                                            <td>{bid.jobTitle}</td>
                                            <td>{bid.buyerEmail}</td>
                                            <td>{bid.deadline}</td>
                                            <td>{bid.status}
                                                <button className={bid.status === "in progress" ? "btn normal-case bg-[#1F4B3F] text-white hover:bg-[#0c3b2f] ml-4" : "hidden"}>Complete</button></td>
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

export default MyBids;