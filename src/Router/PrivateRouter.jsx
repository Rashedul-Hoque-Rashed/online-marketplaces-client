import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"
import Lottie from "lottie-react";
import loading from "../../public/loading.json"


const PrivateRouter = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="my-40 flex justify-center">
                <Lottie animationData={loading} className="h-96 w-96"/>
            </div>
        )
    }
    if (user) {
        return children;
    }
    else {
        return (
            <Navigate state={location.pathname} to="/login"></Navigate>
        )
    }
};

PrivateRouter.propTypes = {
    children: PropTypes.node,
}

export default PrivateRouter;