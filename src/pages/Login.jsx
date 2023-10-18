import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { userSignIn, setLoading } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // user sign in
    userSignIn(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        toast.success("Logged In Successfully");
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
