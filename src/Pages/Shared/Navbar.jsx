import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";



const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
  const {user, logOut} = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        return Swal.fire("Log out success");
      })
      .catch((error) => {
        return Swal.fire(error.message);
      });
  };

  const navLinks = (
    <>
      <li className="hover:bg-red-400 rounded-box">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:bg-red-400 rounded-box">
        <NavLink to="/allContest">All Contest</NavLink>
      </li>
     
    </>
  );

  return (
    <div className="navbar bg-blue-400 px-8 fixed z-10 bg-opacity-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img
          className="w-20 rounded-md"
          src="/logo.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex text-white">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
       {user?.email? <div className="navbar-end">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
          
            <img src={user?.photoURL} />
           
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 my-4"
        >
          <span className="ml-3 font-bold mb-2">{user?.displayName}</span>
          <li>
            <Link to="/dashboard" className="justify-between text-lg mb-2 hover:bg-red-400">
           Dashboard
            </Link>
          </li>
         
          
           <span> <Link to="/login"  className="btn-sm mb-2 w-full">
            <button onClick={handleLogOut} className="btn btn-sm hover:bg-red-400"> Sign Out</button> 
            </Link></span>
         
        </ul>
      </div>

      </div> : 
      <li className="ml-2">
      <NavLink to="/login">
        <button className="btn btn-sm hover:bg-red-400">Login</button></NavLink>
     </li>}
    </div>
  );
};

export default Navbar;