import useAuth from "../../../hooks/useAuth";

const MyProfile = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className="text-center text-4xl">My Profile</h2>
            <h2 className="text-center text-4xl mt-4">Hi, {user?.displayName} welcome back</h2>

        </div>
    );
};

export default MyProfile;