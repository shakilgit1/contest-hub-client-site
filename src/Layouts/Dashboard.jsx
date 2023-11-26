import { FaAd,  FaCalendar, FaHome, FaList, FaShoppingCart,FaUsers, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    // get isAdmin value from the database
    const [isAdmin] = useAdmin();
    // console.log(isAdmin);
   

    return (
        <div className="flex">
           <div className="min-h-screen w-64 bg-orange-500">
             <ul className="menu">
                {
                  isAdmin? <>

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
                  </> 
                  : 
                  <>
                  <li><NavLink to="/dashboard/userHome">
                    <FaHome></FaHome>
                    User Home</NavLink>
                </li>
                <li><NavLink to="/dashboard/cart">
                    <FaShoppingCart></FaShoppingCart>
                    My Cart ()</NavLink>
                </li>
                <li><NavLink to="/dashboard/reservation">
                     <FaCalendar></FaCalendar>
                     Reservation
                    </NavLink>
                </li>
              
                <li>
                    <NavLink to="/dashboard/review">
                    <FaAd></FaAd>
                    Add a review
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/paymentHistory">
                     <FaList></FaList>
                     My Payment History
                    </NavLink>
                </li>
                  </>
                }
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