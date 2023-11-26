import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShopify, FaShoppingCart,FaUsers,  FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
// import useCart from "../hooks/useCart";

const Dashboard = () => {
    // get isAdmin value from the database
    // const [isAdmin] = useAdmin();
    // const [cart] = useCart();
     const isAdmin = true;
    // // console.log(isAdmin);

    return (
        <div className="flex">
           <div className="min-h-screen w-64 bg-orange-500">
             <ul className="menu">
                {
                  isAdmin? <>
                  <li><NavLink to="/dashboard/adminHome">
                    <FaHome></FaHome>
                    Admin Home</NavLink>
                </li>
                <li><NavLink to="/dashboard/addItems">
                    <FaUtensils></FaUtensils>
                    Add Items</NavLink>
                </li>
                <li><NavLink to="/dashboard/manageItems">
                     <FaList></FaList>
                     Mange Items
                    </NavLink>
                </li>
              
                <li>
                    <NavLink to="/dashboard/bookings">
                    <FaBook></FaBook>
                    Manage Bookings
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/users">
                     <FaUsers></FaUsers>
                      All Users
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
                <li><NavLink to="/order/salad">
                    <FaShopify></FaShopify>
                    Menu</NavLink>
                </li>
                {/*  */}
                <li><NavLink to="/contact">
                    <FaEnvelope></FaEnvelope>
                    Contact</NavLink>
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