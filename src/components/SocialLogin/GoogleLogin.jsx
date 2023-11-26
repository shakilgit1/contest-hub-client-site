import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const GoogleLogin = () => {
    const {googleSignIn} = useAuth();
    // const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            navigate(from, {replace: true})
            return Swal.fire("Log in success");
            // const userInfo = {
            //     email: result.user?.email,
            //     name: result.user?.displayName
            // }
            // axiosPublic.post('/user', userInfo)
            // .then(res => {
            //     console.log(res.data);
            //     navigate('/')
            // })
        })
    }
    return (
        <div className="px-6 text-center">
            <hr />
            <div className="p-4">
                <button onClick={handleGoogleLogin} className="btn btn-success">
                    <FaGoogle></FaGoogle>Google
                    </button>
            </div>
        </div>
    );
};

export default GoogleLogin;