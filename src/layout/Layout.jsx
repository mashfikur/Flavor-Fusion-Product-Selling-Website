import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      ></Toaster>
    </div>
  );
};

export default Layout;
