import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"
import { Comment } from 'react-loader-spinner'


const PrivateRouter = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

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