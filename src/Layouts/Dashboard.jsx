import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart,FaUser,FaUsers, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useCreator from "../hooks/useCreator";


const Dashboard = () => {
    // get isAdmin value from the database
    const {user} = useAuth();
    const [isAdmin] = useAdmin();
    const [isCreator] = useCreator();
    console.log(isCreator);
   

    return (
        <div className="flex">
           <div className="min-h-screen w-64 bg-orange-500">
             <ul className="menu">
                
                 { isAdmin && <>

                <li><NavLink to="/dashboard/manageContest">
                     <FaList></FaList>
                     Manage Contest
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/users">
                     <FaUsers></FaUsers>
                      Manage User
                    </NavLink>
                </li>
                  </> }
                 { isCreator && <>

                <li><NavLink to="/dashboard/addContest">
                     <FaAd></FaAd>
                     Add Contest
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/myCreatedContest">
                    <FaList></FaList>
                    My Created Contest
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/submittedContest">
                     <FaUsers></FaUsers>
                    Contest Submitted Page
                    </NavLink>
                </li>
                  </> }
                 
                 { user && !isAdmin && !isCreator && <>
                  <li><NavLink to="/dashboard/myProfile">
                    <FaUser></FaUser>
                    My Profile</NavLink>
                </li>
                <li><NavLink to="/dashboard/myWinningContest">
                    <FaShoppingCart></FaShoppingCart>
                    My Winning Contest</NavLink>
                </li>
                <li><NavLink to="/dashboard/myPerticipate">
                     <FaCalendar></FaCalendar>
                     My Perticipated Contest
                    </NavLink>
                </li>
              
                  </>}
              

                {/* shared navLink */}
                <div className="divider"></div>
                <li><NavLink to="/">
                    <FaHome></FaHome>
                    Home</NavLink>
                </li>
              
             </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>    
            </div> 
        </div>
    );
};

export default Dashboard;