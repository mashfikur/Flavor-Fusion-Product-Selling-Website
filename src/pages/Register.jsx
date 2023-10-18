import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showError, setShowError] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // reseting the error
    setShowError("");

    // email validation
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setShowError("Enter a valid email");
      return;
    }

    // password validation
    if (password.length < 6) {
      setShowError("Your Password should be more than 6 charectars");
      return;
    }

    //
    if (!/[A-Z]/.test(password)) {
      setShowError("Your password must have an uppercase charectar");
      return;
    }
    //
    if (!/[#!*&$@%^]/g.test(password)) {
      setShowError("Your password should contain a special charectar");
      return;
    }

    // creating a user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Created Account Successfully");
        form.reset()

        // updating the user
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // profile updated
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div>
      <div>
        <div className="hero min-h-[90vh] bg-base-200">
          <div className="hero-content flex-col lg:flex-col">
            <div className="text-center lg:text-center">
              <h1 className=" text-4xl lg:text-6xl py-1 bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 font-bold">
                Create Your Account
              </h1>
              <p className="py-6 text-gray-400">
                Start The journey with the best provider you can find.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered focus:outline-none"
                    required
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo URL"
                    className="input input-bordered focus:outline-none"
                    name="photo"
                  />
                </div>
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
                <div className="form-control  ">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="flex">
                    <div className="flex-1">
                      <input
                        type={`${showPass ? "text" : "password"}`}
                        placeholder="password"
                        className="input input-bordered w-full focus:outline-none"
                        required
                        name="password"
                      />
                    </div>
                    <div className="mt-4 ">
                      <p
                        onClick={() => setShowPass(!showPass)}
                        className="absolute -ml-8 text-xl cursor-pointer"
                      >
                        {showPass ? (
                          <AiFillEyeInvisible></AiFillEyeInvisible>
                        ) : (
                          <AiFillEye></AiFillEye>
                        )}
                      </p>
                    </div>
                  </div>
                  {showError ? (
                    <div>
                      <p className="text-red-500 mt-2 -mb-3 font-semibold">
                        {showError}*
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] hover:from-gray-300 hover:via-fuchsia-600 hover:to-orange-600 text-white">
                    Register
                  </button>
                </div>
              </form>

              <div>
                <h3 className="text-center">
                  Already have an account? Please{" "}
                  <Link to="/login">
                    <button className="btn btn-link p-0">Login</button>
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

export default Register;
