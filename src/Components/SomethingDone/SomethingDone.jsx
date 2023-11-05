import icon1 from "../../assets/Icons/post-jobs.png"
import icon2 from "../../assets/Icons/freelancer.png"
import icon3 from "../../assets/Icons/pay.png"
import icon4 from "../../assets/Icons/support.png"

const SomethingDone = () => {
    return (
        <div className="container mx-auto px-2 md:px-6 py-24">
            <div className="mb-10">
                <h4 className="text-4xl font-bold mb-2">Need something done?</h4>
                <p className="text-sm text-gray-400">Most viewed and all-time top-services</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-10">
                <div className="flex-1">
                    <img src={icon1} alt="" className="w-16 h-16 mb-2"/>
                    <h4 className="text-lg font-bold mb-2">Post a job</h4>
                    <p>It’s free and easy to post a job.</p>
                </div>
                <div className="flex-1">
                    <img src={icon2} alt="" className="w-16 h-16 mb-2"/>
                    <h4 className="text-lg font-bold mb-2">Choose freelancers</h4>
                    <p>It’s free and easy to choose freelancers.</p>
                </div>
                <div className="flex-1">
                    <img src={icon3} alt="" className="w-16 h-16 mb-2"/>
                    <h4 className="text-lg font-bold mb-2">Pay safely</h4>
                    <p>It’s free and easy to pay safely.</p>
                </div>
                <div className="flex-1">
                    <img src={icon4} alt="" className="w-16 h-16 mb-2"/>
                    <h4 className="text-lg font-bold mb-2">We’re here to help</h4>
                    <p>It’s free and easy to contact with us.</p>
                </div>
            </div>
        </div>
    );
};

export default SomethingDone;