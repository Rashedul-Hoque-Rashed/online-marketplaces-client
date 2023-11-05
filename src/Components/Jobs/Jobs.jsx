import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Jobs = () => {
    return (
        <div className="container mx-auto px-2 md:px-6 py-24">
            <div className="flex justify-between">
                <div>
                    <h4 className="text-4xl font-bold mb-2">Popular Jobs</h4>
                    <p className="text-sm text-gray-400">Most viewed and all-time top-jobs</p>
                </div>
                <div>
                    <Tabs>
                        <TabList>
                            <Tab>Title 1</Tab>
                            <Tab>Title 2</Tab>
                            <Tab>Title 3</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 3</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Jobs;