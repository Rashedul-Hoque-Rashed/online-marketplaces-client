import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import FreelanceTalent from "../../Components/FreelanceTalent/FreelanceTalent";
// import Jobs from "../../Components/Jobs/Jobs";
import SomethingDone from "../../Components/SomethingDone/SomethingDone";
import Trusted from './../../Components/Trusted/Trusted';

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Freeio</title>
            </Helmet>
            <Banner/>
            <Trusted/>
            {/* <Jobs/> */}
            <SomethingDone/>
            <FreelanceTalent/>
            <DownloadApp/>
        </div>
    );
};

export default Home;