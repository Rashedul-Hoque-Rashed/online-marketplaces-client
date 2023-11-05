import Banner from "../../Components/Banner/Banner";
import FreelanceTalent from "../../Components/FreelanceTalent/FreelanceTalent";
import Jobs from "../../Components/Jobs/Jobs";
import SomethingDone from "../../Components/SomethingDone/SomethingDone";
import Trusted from './../../Components/Trusted/Trusted';

const Home = () => {
    return (
        <div className="">
            <Banner/>
            <Trusted/>
            {/* <Jobs/> */}
            <SomethingDone/>
            <FreelanceTalent/>
        </div>
    );
};

export default Home;