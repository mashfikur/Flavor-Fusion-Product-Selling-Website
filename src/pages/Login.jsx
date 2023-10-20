import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { userSignIn, setLoading, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // user sign in
    userSignIn(email, password)
      .then((result) => {
        form.reset();
        toast.success("Logged In Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Logged In Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Flavor Fusion | Login </title>
      </Helmet>

      <div>
        <div className="hero min-h-[90vh] bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className=" text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 font-bold">
                Login To Your Account
              </h1>
              <p className="py-6 text-gray-400">
                Get ready to experience the flavor of your lifetime.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered focus:outline-none"
                    required
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered focus:outline-none"
                    required
                    name="password"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#2257ca] hover:bg-[#2257ca] text-white">
                    Login
                  </button>
                </div>
              </form>
              <div className="divider -mt-3 mb-2 ">OR</div>
              <div className=" flex flex-col items-center px-8">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn w-full btn-outline hover:bg-[#2257ca] hover:text-white hover:border-none "
                >
                  <FcGoogle className="text-xl"></FcGoogle>
                  Sign In with Google
                </button>
              </div>

              <div>
                <h3 className="text-center">
                  New to this Website ? Please{" "}
                  <Link to="/register">
                    <button className="btn btn-link p-0">Register</button>
                  </Link>{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
