import { FaCalendar, FaHome, FaList, FaShoppingCart,FaUser,FaUsers, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {
    // get isAdmin value from the database
    const {user} = useAuth();
    const [isAdmin] = useAdmin();
    // console.log(isAdmin);
   

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
                 
                 { user && !isAdmin && <>
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