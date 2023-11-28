import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyProfile = () => {
    const {user} = useAuth();
    useEffect(() => {
        AOS.init({duration:"1000", delay:"500"});
      
      }, []);
    return (
        <div>
            <h2 data-aos="fade-up" className="text-center text-4xl">My Profile</h2>
            <h2 className="text-center text-4xl mt-4">Hi, <span className="text-blue-400 font-bold">{user?.displayName}</span> welcome back</h2>

        </div>
    );
};

export default MyProfile;