import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div><Outlet></Outlet></div>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default Layout;
