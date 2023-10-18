import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { HiHome } from "react-icons/hi";
import Footer from "../shared/Footer";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>Flavor Fusion | Error </title>
      </Helmet>
      <Navbar></Navbar>
      <div className="min-h-screen error-bg ">
        <div className="overlay">
          <div className="flex flex-col items-center my-auto">
            <h3 className="font-bold text-2xl lg:text-6xl">
              OOPS,ERROR OCCURED !
            </h3>
            <div>
              <Link to={"/"}>
                <button className="btn my-4 flex items-center bg-main hover:bg-main text-white border-none">
                  <HiHome className="text-xl"></HiHome>
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
