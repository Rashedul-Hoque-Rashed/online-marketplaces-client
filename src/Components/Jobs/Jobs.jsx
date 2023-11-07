import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxios from '../../Hooks/useAxios';
import {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Jobs = () => {

    const axios = useAxios();
    const [webDevelopmentJobs, setWebDevelopmentJobs] = useState([]);
    const [digitalMarketingJobs, setDigitalMarketingJobs] = useState([]);
    const [graphicsDesignJobs, setGraphicsDesignJobs] = useState([]);

    useEffect(() => {
        axios.get('/tab1')
            .then(res => setWebDevelopmentJobs(res.data))
            .catch(err => console.error(err.message));

        axios.get('/tab2')
            .then(res => setDigitalMarketingJobs(res.data))
            .catch(err => console.error(err.message));

        axios.get('/tab3')
            .then(res => setGraphicsDesignJobs(res.data))
            .catch(err => console.error(err.message));
    }, [axios])



    return (
        <div className="container mx-auto px-2 md:px-6 pt-24">
            <div className='mb-10'>
                <h4 className="text-4xl font-bold mb-2">Popular Jobs</h4>
                <p className="text-sm text-gray-400">Most viewed and all-time top-jobs</p>

            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Digital Marketing</Tab>
                        <Tab>Graphics Design</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            webDevelopmentJobs.length === 0 ? <p className="text-4xl font-bold">No Jobs Found. </p> :
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                    {
                                        webDevelopmentJobs.map(job => <div key={job._id} className="bg-[#1F4B3F] text-white p-1 rounded-xl shadow-lg shadow-[#1F4B3F]">
                                            <h2 className="text-center text-2xl font-semibold my-4">{job.jobTitle}</h2>
                                            <div className="bg-white text-black rounded-xl pt-8 pb-2 text-center">
                                                <h4 className="text-xl font-semibold mb-8 min-h-[85px]">{job.description}</h4>
                                                <p className="text-lg text-start ml-2 font-semibold">Price Range: <span className="text-gray-600">{job.minimumPrice}$-{job.maximumPrice}$</span></p>
                                                <p className="text-lg text-start ml-2 font-semibold mb-4">Deadline: <span className="text-gray-600">{job.deadline}</span></p>
                                                <div className='mx-2'>
                                                    <Link to={`/jobs/${job._id}`}  className="btn normal-case w-full bg-[#1F4B3F] text-white hover:bg-[#0c3b2f]">
                                                        Bid Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            digitalMarketingJobs.length === 0 ? <p className="text-4xl font-bold">No Jobs Found. </p> :
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                    {
                                        digitalMarketingJobs.map(job => <div key={job._id} className="bg-[#1F4B3F] text-white p-1 rounded-xl shadow-lg shadow-[#1F4B3F]">
                                            <h2 className="text-center text-2xl font-semibold my-4">{job.jobTitle}</h2>
                                            <div className="bg-white text-black rounded-xl pt-8 pb-2 text-center">
                                                <h4 className="text-xl font-semibold mb-8 min-h-[85px]">{job.description}</h4>
                                                <p className="text-lg text-start ml-2 font-semibold">Price Range: <span className="text-gray-600">{job.minimumPrice}$-{job.maximumPrice}$</span></p>
                                                <p className="text-lg text-start ml-2 font-semibold mb-4">Deadline: <span className="text-gray-600">{job.deadline}</span></p>
                                                <div className='mx-2'>
                                                    <Link to={`/jobs/${job._id}`}  className="btn normal-case w-full bg-[#1F4B3F] text-white hover:bg-[#0c3b2f]">
                                                        Bid Now
                                                    </Link>
                                                </div>


                                            </div>
                                        </div>)
                                    }
                                </div>
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            graphicsDesignJobs.length === 0 ? <p className="text-4xl font-bold">No Jobs Found. </p> :
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                    {
                                        graphicsDesignJobs.map(job => <div key={job._id} className="bg-[#1F4B3F] text-white p-1 rounded-xl shadow-lg shadow-[#1F4B3F]">
                                            <h2 className="text-center text-2xl font-semibold my-4">{job.jobTitle}</h2>
                                            <div className="bg-white text-black rounded-xl pt-8 pb-2 text-center">
                                                <h4 className="text-xl font-semibold mb-8 min-h-[85px]">{job.description}</h4>
                                                <p className="text-lg text-start ml-2 font-semibold">Price Range: <span className="text-gray-600">{job.minimumPrice}$-{job.maximumPrice}$</span></p>
                                                <p className="text-lg text-start ml-2 font-semibold mb-4">Deadline: <span className="text-gray-600">{job.deadline}</span></p>
                                                <div className='mx-2'>
                                                    <Link to={`/jobs/${job._id}`}  className="btn normal-case w-full bg-[#1F4B3F] text-white hover:bg-[#0c3b2f]">
                                                        Bid Now
                                                    </Link>
                                                </div>


                                            </div>
                                        </div>)
                                    }
                                </div>
                        }
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Jobs;