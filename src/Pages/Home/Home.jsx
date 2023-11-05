import Banner from "../../Components/Banner/Banner";
import Jobs from "../../Components/Jobs/Jobs";
import SomethingDone from "../../Components/SomethingDone/SomethingDone";
import Trusted from './../../Components/Trusted/Trusted';

const Home = () => {
    return (
        <div className="">
            <Banner/>
            <Trusted/>
            <Jobs/>
            <SomethingDone/>
        </div>
    );
};

export default Home;