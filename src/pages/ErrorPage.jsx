import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen error-bg ">
        <div className="overlay">
          <div className="flex flex-col items-center my-auto">
            <h3 className="font-bold text-2xl lg:text-6xl">
              OOPS,ERROR OCCURED !
            </h3>
            <div>
              <Link to={"/"}>
                <button className="btn my-4 bg-main hover:bg-main text-white border-none">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
