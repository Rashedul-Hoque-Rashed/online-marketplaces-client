import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import FreelanceTalent from "../../Components/FreelanceTalent/FreelanceTalent";
import Jobs from "../../Components/Jobs/Jobs";
import SomethingDone from "../../Components/SomethingDone/SomethingDone";
import Trusted from './../../Components/Trusted/Trusted';
import HighestRatedFreelancers from "../../Components/HighestRatedFreelancers/HighestRatedFreelancers";
import FindTalent from "../../Components/FindTalent/FindTalent";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Freeio</title>
            </Helmet>
            <Banner/>
            <Trusted/>
            <Jobs/>
            <SomethingDone/>
            <FreelanceTalent/>
            <HighestRatedFreelancers/>
            <FindTalent/>
            <DownloadApp/>
        </div>
    );
};

export default Home;