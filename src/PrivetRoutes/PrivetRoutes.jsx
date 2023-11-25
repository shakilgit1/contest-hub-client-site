/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <progress className="progress w-56"></progress>;
    }
    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoutes;