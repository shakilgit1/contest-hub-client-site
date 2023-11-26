
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/SocialLogin/GoogleLogin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
// import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    // const axiosPublic = useAxiosPublic();

    const {logInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

   const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    logInUser(data.email, data.password)
    .then(()=>{
      navigate(from, {replace: true})
      return Swal.fire("Log in success");
    })
    .catch((error) => {
      return Swal.fire(error.message);
    });
  };



  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div>
              <h2 className="text-3xl font-bold text-center">Login</h2>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-400">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-400">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-400">Password must be 6 character</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-400">Password must be less than 20 character</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-400">Password must have one uppercase, one lowercase, one number and one special character</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
               Log in
              </button>
            </div>
          </form>
          <GoogleLogin></GoogleLogin>
          <p className="text-center mb-4">
            New to here?
            <Link className="ml-2 text-orange-500 font-bold" to="/SignUp">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;